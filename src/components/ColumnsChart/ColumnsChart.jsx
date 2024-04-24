import ReactApexChart from 'react-apexcharts';

const ColumnsChart = () => {
  const chartOptions = {
    series: [{
      data: [100, 45, 83, 70, 20]
    }],
    options: {
      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          columnWidth: '35%',
          distributed: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      xaxis: {
        categories: [
          ['Temáticas', 'abordadas'],
          ['Interações', 'sociais'],
          'Pontualidade',
          'Alimentação',
          'Outro',
        ],
        labels: {
          style: {
            fontSize: '12px'
          }
        }
      }
    }
  };

  return (
    <div id="chart">
      <ReactApexChart options={chartOptions.options} series={chartOptions.series} type="bar" height={350} />
    </div>
  );
};

export default ColumnsChart;
