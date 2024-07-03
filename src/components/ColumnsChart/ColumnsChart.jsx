import ReactApexChart from "react-apexcharts";

const ColumnsChart = () => {
  const chartOptions = {
    series: [
      {
        data: [100, 45, 83, 70, 20],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
        fontFamily: 'Poppins'
      },
      plotOptions: {
        bar: {
          columnWidth: "30%",
          distributed: true,
          borderRadius: 13,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: [
          ["Temáticas", "abordadas"],
          ["Interações", "sociais"],
          "Pontualidade",
          "Alimentação",
          "Outro",
        ],
        labels: {
          style: {
            fontSize: "12px",
          },
        },
      },
      colors: ["#00BF67", "#23D3CA", "#56B2AC", "#008ADF", "#55C3FF"],
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "vertical",
          shadeIntensity: 0.5,
          gradientToColors: undefined,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 100],
          colorStops: [],
        },
      },
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={chartOptions.options}
        series={chartOptions.series}
        type="bar"
        height={380}
      />
    </div>
  );
};

export default ColumnsChart;
