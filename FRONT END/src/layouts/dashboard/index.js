import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import ArgonBox from "components/ArgonBox";
import DetailedStatisticsCard from "examples/Cards/StatisticsCards/DetailedStatisticsCard";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import LiveVideoStream from './LiveVideoStream';
import FetchSlots from './FetchSlots';
import Legend from './Legend';  // Import the Legend component

function Default() {
  const [slotData, setSlotData] = useState({
    bike_slots: 0,
    electric_slots: 0,
    car_slots: 0,
  });

  const handleUpdateSlots = (data) => {
    setSlotData(data);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <FetchSlots onUpdateSlots={handleUpdateSlots} />
      <ArgonBox py={3}>
        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} md={6} lg={4}>
            <DetailedStatisticsCard
              title="Four-Wheeler Slots"
              count={slotData.car_slots}
              icon={{ color: "info", component: <DirectionsCarIcon /> }}
              percentage={{ color: "success", count: "+5%", text: "since last week" }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DetailedStatisticsCard
              title="Two-Wheeler Slots"
              count={slotData.bike_slots}
              icon={{ color: "error", component: <TwoWheelerIcon /> }}
              percentage={{ color: "success", count: "+3%", text: "since last week" }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="Electric Vehicle Slots"
              count={slotData.electric_slots}
              icon={{ color: "success", component: <ElectricCarIcon /> }}
              percentage={{ color: "error", count: "-2%", text: "since last week" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} mb={3}>
          <Grid item xs={12}>
            <LiveVideoStream />
          </Grid>
          <Grid item xs={12}>
            <Legend />  
          </Grid>
        </Grid>
      </ArgonBox>
    </DashboardLayout>
  );
}

export default Default;
