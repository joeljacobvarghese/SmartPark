import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const SlotOccupancyChart = () => {
  const data = {
    labels: ["Cars", "Bikes", "EVs"],
    datasets: [
      {
        label: "SLOT OCCUPANCY",
        data: [38, 43, 19],
        backgroundColor: [
          "rgba(54, 162, 235, 0.6)", // Blue for Cars
          "rgba(255, 206, 86, 0.6)", // Yellow for Bikes
          "rgba(75, 192, 192, 0.6)", // Green for EVs
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: {
            size: 14,
          },
          color: "#666",
        },
      },
    },
  };

  return <Pie data={data} options={options} />;
};

export default SlotOccupancyChart;
