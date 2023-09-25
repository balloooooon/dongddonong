import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";

Chart.register(ArcElement);

const data = {
  datasets: [
    {
      data: [3, 10],
      backgroundColor: ["gray", "#e6e6e6"],
      display: true,
    },
  ],
};

const HalfChart = (props) => {
  return (
    <Doughnut
      data={data}
      options={{
        plugins: {
          legend: {
            display: true,
          },
          tooltip: {
            enabled: false,
          },
        },
        rotation: -90,
        circumference: 180,
        cutout: "60%",
        maintainAspectRatio: true,
        responsive: true,
      }}
    />
  );
};

export default HalfChart;
