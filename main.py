import cv2
import numpy as np

from util import get_parking_spots_bboxes, empty_or_not

def calc_diff(im1, im2):
    return np.abs(np.mean(im1) - np.mean(im2))

mask_path = './mask_1920_1080.png'
video_path = './parking_1920_1080.mp4'
output_video_path = './output_parking_mask_video.mp4'

# List of electric vehicle slot indices
electric_slots = [
    7, 20, 26, 33, 36, 47, 50, 63, 65, 77, 80, 92, 96, 107, 110, 121, 122,
    133, 136, 149, 152, 166, 167, 191, 192, 203, 204, 212, 211, 228, 223, 241,
    242, 262, 257, 275, 276, 290, 291, 307, 308, 325, 322, 339, 340, 358, 354
]


# List of bike/2-wheeler slot indices
bike_slots = [
    232, 229, 247, 243, 293, 289, 275, 272, 292, 288, 312, 309, 347, 343, 367,
    363, 392, 389, 224, 225, 240, 238, 258, 256, 274, 290, 307, 304, 319, 320,
    337, 336, 359, 356, 377, 376, 394, 393, 222, 220, 239, 237, 276, 294, 299,
    298, 305, 321, 354, 352, 370, 369, 391, 219, 246, 255, 271, 287, 288, 295,
    310, 318, 331, 332, 349, 348, 367, 366, 379, 378, 396, 195, 196, 210, 208,
    217, 218, 230, 250, 248, 265, 266, 279, 278, 313, 314, 328, 327, 345, 346,
    362, 361, 193, 194, 209, 207, 215, 216, 231, 249, 244, 264, 263, 296, 317,
    342, 343, 355, 356, 189, 190, 205, 206, 213, 214, 226, 227, 246, 259, 260,
    273, 274, 308, 306, 335, 336, 357, 358, 344, 385, 360, 341, 351, 303, 368,
    269, 387, 381, 374, 334, 301, 364, 316, 371, 315, 300, 297, 281, 234, 333,
    329, 280, 338, 261, 245, 277, 326, 384, 382, 390, 383, 375, 253, 254, 270,
    285, 286, 302, 395, 388, 380, 373, 365, 350, 233, 330, 282, 323, 311, 353,
    324, 221, 236, 235, 251, 252, 267, 268, 283, 284, 386, 372
]


# Read the mask image
mask = cv2.imread(mask_path, 0)
color_mask = cv2.cvtColor(mask, cv2.COLOR_GRAY2BGR)

# Open the video file
cap = cv2.VideoCapture(video_path)

# Get video properties
fps = cap.get(cv2.CAP_PROP_FPS)
width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))

# Create a VideoWriter object to save the output video
fourcc = cv2.VideoWriter_fourcc(*'mp4v')
out = cv2.VideoWriter(output_video_path, fourcc, fps, (width, height))

# Find connected components in the mask
connected_components = cv2.connectedComponentsWithStats(mask, 4, cv2.CV_32S)

# Get bounding boxes of parking spots
spots = get_parking_spots_bboxes(connected_components)

spots_status = [None for j in spots]
diffs = [None for j in spots]

previous_frame = None

frame_nmr = 0
ret = True
step = 100


while ret:
    ret, frame = cap.read()

    if not ret:
        break

    # Copy the original mask to reset the color_mask for each frame
    current_mask = color_mask.copy()

    if frame_nmr % step == 0 and previous_frame is not None:
        for spot_indx, spot in enumerate(spots):
            x1, y1, w, h = spot

            spot_crop = frame[y1:y1 + h, x1:x1 + w, :]

            diffs[spot_indx] = calc_diff(spot_crop, previous_frame[y1:y1 + h, x1:x1 + w, :])

    if frame_nmr % step == 0:
        if previous_frame is None:
            arr_ = range(len(spots))
        else:
            arr_ = [j for j in np.argsort(diffs) if diffs[j] / np.amax(diffs) > 0.4]
        for spot_indx in arr_:
            spot = spots[spot_indx]
            x1, y1, w, h = spot

            spot_crop = frame[y1:y1 + h, x1:x1 + w, :]

            spot_status = empty_or_not(spot_crop)

            spots_status[spot_indx] = spot_status

    if frame_nmr % step == 0:
        previous_frame = frame.copy()

    # Update the mask with a white outline and colored inside for each frame
    for spot_indx, spot in enumerate(spots):
        spot_status = spots_status[spot_indx]
        x1, y1, w, h = spots[spot_indx]

        # Draw white outline
        cv2.rectangle(current_mask, (x1, y1), (x1 + w, y1 + h), (255, 255, 255), 3)      

        # Determine the color based on spot availability and type
        if spot_status:
            if spot_indx in electric_slots:
                color = (50, 205, 50)  # Lime Green for available electric vehicles
            elif spot_indx in bike_slots:
                color = (65, 105, 225)  # Royal Blue for available bikes/2-wheelers
            else:
                color = (220, 20, 60)  # Crimson Red for available cars/4-wheelers
        else:
            color = (0, 0, 255)  # Red for occupied

        cv2.rectangle(current_mask, (x1, y1), (x1 + w, y1 + h), color, -1)

    # Write the updated mask frame to the video
    out.write(current_mask)

    frame_nmr += 1

cap.release()
out.release()
cv2.destroyAllWindows()