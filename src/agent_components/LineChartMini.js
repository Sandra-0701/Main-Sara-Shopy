import { Line } from "react-chartjs-2";

export default function LineChartMini() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Mini Chart",
        data: [1, 2, 1.5, 3, 2.5],
        borderColor: "rgba(59, 130, 246, 0.5)",
        fill: true,
        backgroundColor: "rgba(59, 130, 246, 0.1)",
      },
    ],
  };

  return (
    <Line
      data={data}
      options={{
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            display: false,
          },
          y: {
            display: false,
          },
        },
      }}
    />
  );
}
