import { useRef } from "react";

// SwiperJS
import SwiperCore, { Autoplay, Navigation } from "swiper";

// SwiperJS react components
import { Swiper, SwiperSlide } from "swiper/react";

// SwiperJS styles
import "swiper/swiper-bundle.min.css";

// @mui material components
import Card from "@mui/material/Card";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Images
import bg1 from "assets/images/image1.jpg";
import bg2 from "assets/images/image2.jpg";
import bg3 from "assets/images/image3.jpg";

function Slider() {
  // install SwiperJS modules
  SwiperCore.use([Autoplay, Navigation]);

  // SwiperJS navigation buttons ref
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <Card sx={{ position: "relative", display: "block", height: "100%", overflow: "hidden" }}>
      <Swiper
        onInit={({ params, navigation }) => {
          const { navigation: nav } = params;

          nav.prevEl = navigationPrevRef.current;
          nav.nextEl = navigationNextRef.current;
          navigation.init();
          navigation.update();
        }}
        autoplay={{ delay: 5000 }}
        speed={800}
        spaceBetween={0}
        slidesPerView={1}
        loop
        style={{ height: "100%" }}
      >
        <ArgonBox
          display="flex"
          alignItems="center"
          position="absolute"
          top={12}
          right={12}
          zIndex={5}
        >
          <ArgonBox
            width="3.25rem"
            height="3.25rem"
            color="white"
            p={2}
            sx={{ cursor: "pointer" }}
            ref={navigationPrevRef}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </ArgonBox>
          <ArgonBox
            width="3.25rem"
            height="3.25rem"
            color="white"
            p={2}
            sx={{ cursor: "pointer" }}
            ref={navigationNextRef}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </ArgonBox>
        </ArgonBox>
        <SwiperSlide>
          <ArgonBox
            sx={{
              position: "relative",
              backgroundImage: `url(${bg1})`,
              backgroundSize: "cover",
              height: "100%",
            }}
          >
            <ArgonBox
              position="absolute"
              bottom={16}
              ml={6}
              py={2.5}
              textAlign="left"
              width="80%"
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent black background
                borderRadius: "8px", // Slight rounding of corners
                padding: "16px", // Padding inside the blackboard
              }}
            >
              <ArgonTypography variant="h4" color="white" mb={0.5} fontWeight="bold" fontSize="32px">
                Today you are most likely to get a slot at 
              </ArgonTypography>
              <ArgonTypography variant="h3" color="white" fontWeight="bold" fontSize="40px">
                9:53 AM
              </ArgonTypography>
            </ArgonBox>
          </ArgonBox>
        </SwiperSlide>
        <SwiperSlide>
          <ArgonBox
            sx={{
              position: "relative",
              backgroundImage: `url(${bg2})`,
              backgroundSize: "cover",
              height: "100%",
            }}
          >
            <ArgonBox
              position="absolute"
              bottom={16}
              ml={6}
              py={2.5}
              textAlign="left"
              width="80%"
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent black background
                borderRadius: "8px", // Slight rounding of corners
                padding: "16px", // Padding inside the blackboard
              }}
            >
              <ArgonTypography variant="h4" color="white" mb={0.5} fontWeight="bold" fontSize="32px">
                This week you are most likely to get a slot on 
              </ArgonTypography>
              <ArgonTypography variant="h3" color="white" fontWeight="bold" fontSize="40px">
                Friday
              </ArgonTypography>
            </ArgonBox>
          </ArgonBox>
        </SwiperSlide>
        <SwiperSlide>
          <ArgonBox
            sx={{
              position: "relative",
              backgroundImage: `url(${bg3})`,
              backgroundSize: "cover",
              height: "100%",
            }}
          >
            <ArgonBox
              position="absolute"
              bottom={16}
              ml={6}
              py={2.5}
              textAlign="left"
              width="80%"
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent black background
                borderRadius: "8px", // Slight rounding of corners
                padding: "16px", // Padding inside the blackboard
              }}
            >
              <ArgonTypography variant="h4" color="white" mb={0.5} fontWeight="bold" fontSize="32px">
                This Month you are most likely to get a slot on 
              </ArgonTypography>
              <ArgonTypography variant="h3" color="white" fontWeight="bold" fontSize="40px">
                13th
              </ArgonTypography>
            </ArgonBox>
          </ArgonBox>
        </SwiperSlide>
      </Swiper>
    </Card>
  );
}

export default Slider;
