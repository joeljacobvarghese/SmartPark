/* eslint-disable no-unused-vars */
/**
=========================================================
* Argon Dashboard 2 MUI - v3.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-material-ui
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Argon Dashboard 2 MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DetailedStatisticsCard from "examples/Cards/StatisticsCards/DetailedStatisticsCard";
import SalesTable from "examples/Tables/SalesTable";
import CategoriesList from "examples/Lists/CategoriesList";
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import AccessTimeIcon from '@mui/icons-material/AccessTime'; 
import LocationOnIcon from '@mui/icons-material/LocationOn'; 
import OccupancyRateChart from "./OccupancyRateChart";
import SlotOccupancyChart from "./SlotOccupancyChart";

// Replace the CategoriesList component with this:
<Grid container spacing={3}>
  <Grid item xs={6} md={8}>
    <SalesTable title="Parking Statistics by Brand" rows={salesTableData} />
  </Grid>
  <Grid item xs={12} md={4}>
    <SlotOccupancyChart />
  </Grid>
</Grid>



// Argon Dashboard 2 MUI base styles
import typography from "assets/theme/base/typography";

// Dashboard layout components
import Slider from "layouts/tables/components/Slider";

// Data
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";
import salesTableData from "layouts/dashboard/data/salesTableData";
import categoriesListData from "layouts/dashboard/data/categoriesListData";

function Default() {
  const { size } = typography;
  return (
    <DashboardLayout>
      <ArgonBox py={3}>
        <Grid container spacing={3} mb={3}>
          <Grid item xs={24} md={12} lg={4}>
            <DetailedStatisticsCard
              title="Did you know?"
              count="A whopping 8,760 hours of EV charging completed last year"
              icon={{ color: "success", component: <BatteryChargingFullIcon /> }}
              percentage={{ color: "success", count: "+3%", text: "more than previous years" }}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={4}>
            <DetailedStatisticsCard
              title="Peak Parking Hours"
              count="Most vehicles parked between 11:00 and 12:00 AM"
              icon={{ color: "info", component: <AccessTimeIcon /> }}
              percentage={{ color: "warning", count: "85%", text: "peak occupancy" }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="Hot Spots"
              count="Parking spots 105, 206, and 309 are in high demand"
              icon={{ color: "error", component: <LocationOnIcon /> }}
              percentage={{ color: "success", count: "95%", text: "occupancy rate" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} lg={7}>
            <OccupancyRateChart />
          </Grid>
          <Grid item xs={12} lg={5}>
            <Slider />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={6} md={8}>
            <SalesTable title="Parking Statistics by Brand" rows={salesTableData} />
          </Grid>
          <Grid item xs={12} md={4}>
            <SlotOccupancyChart />
          </Grid>
        </Grid>
      </ArgonBox>
    </DashboardLayout>
  );
}

export default Default;
