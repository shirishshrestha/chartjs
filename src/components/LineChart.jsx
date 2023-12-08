import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import jsonData from "./LineValue.json";
import { IoIosArrowRoundUp } from "react-icons/io";

const LineChart = ({ chartData }) => {
  const options = {
    responsive: true,
    // maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        align: "end",
        labels: {
          usePointStyle: true,
          boxWidth: 40,
          font: {
            size: 14,
            family: "Barlow Condensed",
            weight: 500,
          },
        },
        reverse: true,
        onHover: (event) => {
          event.chart.canvas.style.cursor = "pointer";
        },
        onLeave: (event) => {
          event.chart.canvas.style.cursor = "default";
        },
      },
      title: {
        display: true,
        text: "Total Invoicing YTD",
        align: "start",
        font: {
          family: "Barlow Condensed, sans-serif",
          style: "italic",
          size: 24,
          weight: "bold",
        },
        color: "#0F1010",
      },
    },
    scales: {
      y: {
        grace: 20,
        grid: {},
        border: {
          display: false,
          dash: [5, 5],
          dashOffset: 5,
        },

        min: 0,
        max: 900,
        ticks: {
          callback: function (value) {
            value = value + "K";
            return value;
          },
          stepSize: 90,
          font: {
            size: 14,
            family: "Barlow Condensed",
            weight: 500,
          },
        },
      },
      x: {
        grid: {
          display: false,
          drawBorder: false,
          drawOnChartArea: false,
          dashOffset: 5,
        },
        border: {
          display: false,
        },
        ticks: {
          font: {
            size: 14,
            family: "Barlow Condensed",
            weight: 500,
          },
        },
      },
    },
  };
  return (
    <section className="container">
      <div className="container__heading">
        <div className="icon">
          <img src="/src/assets/icon.svg" alt="icon" />
        </div>
        <h3 className="container__heading">Total Invoicing</h3>
      </div>
      <div className="chart__section">
        <div className="chart__section--data">
          {jsonData.map((data, index) => (
            <div className={`chart__section--number--${data.classId}`}>
              <div className={`numbers__title--${data.classId}`}>
                <span>{data.title}</span>
              </div>
              <div className={`numbers__cost--${data.classId}`}>
                $ <span>{data.cost}</span> {data.unit}
              </div>
            </div>
          ))}
          <div className="percentage">
            <div className="percentage__digit">
              <IoIosArrowRoundUp className="percentage__icon" /> 8.5 %
            </div>
            <span>vs last year</span>
          </div>
        </div>
        <div className="line-chart">
          <Line data={chartData} options={options} />
        </div>
      </div>
    </section>
  );
};

export default LineChart;
