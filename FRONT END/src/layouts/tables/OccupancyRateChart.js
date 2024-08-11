import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

const OccupancyRateChart = () => {
  const data = {
    labels: [
      "8-9 AM",
      "9-10 AM",
      "10-11 AM",
      "11-12 PM",
      "12-1 PM",
      "1-2 PM",
      "2-3 PM",
      "3-4 PM",
      "4-5 PM",
      "5-6 PM",
      "6-7 PM",
      "7-8 PM",
    ],
    datasets: [
      {
        label: "Free Slots",
        data: [2, 10, 20, 25, 18, 18, 16, 14, 12, 15, 7, 1],
        fill: false,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(75,192,192,1)",
        tension: 0.4, // Makes the line smooth
        pointRadius: 5, // Makes the points more visible
        pointBackgroundColor: "rgba(255,99,132,1)", // Custom color for the points
      },
    ],
  };

  const options = {
    layout: {
        padding: {
          top: 80, // Add space at the top
        },
      },
    scales: {
      x: {
        title: {
          display: true,
          text: "Time of Day",
          font: {
            size: 18, // Increase font size
          },
          color: "#666",
        },
        ticks: {
          color: "#666",
          font: {
            size: 16, // Increase font size
          },
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Free Slots",
          font: {
            size: 18, // Increase font size
          },
          color: "#666",
        },
        ticks: {
          stepSize: 2,
          color: "#666",
          font: {
            size: 16, // Increase font size
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Disable legend
      },
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(0,0,0,0.7)",
        titleFont: {
          size: 14,
        },
        bodyFont: {
          size: 12,
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default OccupancyRateChart;
