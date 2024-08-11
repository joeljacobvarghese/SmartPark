import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const FetchSlots = ({ onUpdateSlots }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/get_slot_counts");
        onUpdateSlots(response.data);
      } catch (error) {
        console.error("Error fetching slot data:", error);
      }
    };

    // Fetch data every 1 second
    const intervalId = setInterval(fetchData, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [onUpdateSlots]);

  return null; // This component doesn't render anything
};

// Define prop types
FetchSlots.propTypes = {
  onUpdateSlots: PropTypes.func.isRequired,
};

export default FetchSlots;
