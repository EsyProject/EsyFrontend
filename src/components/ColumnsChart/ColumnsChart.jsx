import Chart from 'react-apexcharts';

const ColumnsChart = () => {
  const data = [
    {
      name: 'Series 1',
      data: [44, 55, 41, 67, 22, 43]
    },
    {
      name: 'Series 2',
      data: [13, 23, 20, 8, 13, 27]
    },
    {
      name: 'Series 3',
      data: [11, 17, 15, 15, 21, 14]
    },
    {
      name: 'Series 4',
      data: [21, 7, 25, 13, 22, 8]
    }
  ];

  const options = {
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    stroke: {
      width: 1,
      colors: ['#fff']
    },
    title: {
      text: 'Distributed Columns'
    },
    xaxis: {
      categories: ['2008', '2009', '2010', '2011', '2012', '2013'],
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "K";
        }
      }
    },
    fill: {
      opacity: 1
    },
  };

  return (
    <div>
      <Chart options={options} series={data} type="bar" height={350} />
    </div>
  );
};

export default ColumnsChart;
