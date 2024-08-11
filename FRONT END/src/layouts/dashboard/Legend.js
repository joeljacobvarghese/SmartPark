import React from "react";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import Grid from "@mui/material/Grid";

const Legend = () => {
  return (
    <ArgonBox mt={3} px={3}>
      <ArgonTypography variant="h5" fontWeight="bold" gutterBottom>
        LEGEND
      </ArgonTypography>
      <Grid container spacing={2}>
        <Grid item xs={6} md={3}>
          <ArgonBox display="flex" alignItems="center">
            <ArgonBox width="24px" height="24px" bgColor="red" mr={2} />
            <ArgonTypography variant="subtitle1">OCCUPIED</ArgonTypography>
          </ArgonBox>
        </Grid>
        <Grid item xs={6} md={3}>
          <ArgonBox display="flex" alignItems="center">
            <ArgonBox width="24px" height="24px" bgColor="blue" mr={2} />
            <ArgonTypography variant="subtitle1">CARS</ArgonTypography>
          </ArgonBox>
        </Grid>
        <Grid item xs={6} md={3}>
          <ArgonBox display="flex" alignItems="center">
            <ArgonBox width="24px" height="24px" bgColor="yellow" mr={2} />
            <ArgonTypography variant="subtitle1">BIKES</ArgonTypography>
          </ArgonBox>
        </Grid>
        <Grid item xs={6} md={3}>
          <ArgonBox display="flex" alignItems="center">
            <ArgonBox width="24px" height="24px" style={{ backgroundColor: "rgb(50, 205, 50)" }} mr={2} />
            <ArgonTypography variant="subtitle1">ELECTRIC</ArgonTypography>
          </ArgonBox>
        </Grid>
      </Grid>
    </ArgonBox>
  );
};

export default Legend;
