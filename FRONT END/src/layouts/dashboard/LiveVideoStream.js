import React from 'react';
import PropTypes from 'prop-types';

const LiveVideoStream = ({ onSlotDataUpdate }) => {
  return (
    <img
      src="http://localhost:5000/video_feed"
      alt="Live Stream"
      style={{ width: '100%', height: 'auto', maxWidth: '100%', maxHeight: '100vh' }} // Auto-scaling with maximum height constraint
    />
  );
};

// Validate the props
LiveVideoStream.propTypes = {
  onSlotDataUpdate: PropTypes.func.isRequired,
};

export default LiveVideoStream;
