import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const PieChart = ({ data }) => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    if (chartContainer && chartContainer.current) {
      const ctx = chartContainer.current.getContext("2d");

      chartInstance.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: Object.keys(data),
          datasets: [
            {
              label: "Count",
              data: Object.values(data),
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
              ],
              borderColor: [
                "rgb(0, 0, 0)",
                "rgb(0, 0, 0)",
                "rgb(0, 0, 0)",
                "rgb(0, 0, 0)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                font: {
                  size: 15, // Adjust font size
                  weight: "bold", // Adjust font weight
                  family: "babydoll",
                },
                color: "black", // Adjust font color
              },
            },
            x: {
              ticks: {
                font: {
                  size: 6, // Adjust font size
                  family: "babydoll",
                },
                color: "black", // Adjust font color
              },
            },
          },
          plugins: {
            title: {
              display: true,
              text: "dry food brand pre tails",
              font: {
                size: 20, // Adjust title font size
                family: "babydoll",
              },
              color: "black",
            },
            legend: {
              labels: {
                font: {
                  size: 12,
                  family: "babydoll", // Adjust legend font size
                },
                color: "black", // Adjust legend font color
              },
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartContainer}></canvas>;
};

export default PieChart;
