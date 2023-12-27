import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const options = {

  scales: {
    
    y: {
      ticks: {
        display: false, // Hide y-axis data labels
      },
      grid: {
        display: false
      }
    },
  },
  plugins: {
    legend: {
      display: false, // Hide the legend
    },
  },

};
function BarChart(props: any) {
  return <Bar data={props.chartData} options={options} />;
}

export default BarChart;