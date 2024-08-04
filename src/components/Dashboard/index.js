import React from 'react';
import { Line, Pie } from 'react-chartjs-2'; 
import { 
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import './index.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = () => {
  const lineData = {
    labels: ['6/30/2024 - 7/6/2024', '7/7/2024 - 7/13/2024', '7/21/2024 - 7/27/2024'],
    datasets: [
      {
        label: 'Orders',
        data: [1600, 1200, 800, 800],
        borderColor: 'orange',
        backgroundColor: 'rgba(255, 165, 0, 0.2)',
        fill: false,
      },
      {
        label: 'Sales',
        data: [1400, 800, 400, 0],
        borderColor: 'cyan',
        backgroundColor: 'rgba(0, 255, 255, 0.2)',
        fill: false,
      },
    ],
  };

  const pieData = {
    labels: ['WooCommerce Store', 'Shopify Store'],
    datasets: [
      {
        data: [44.2, 55.8],
        backgroundColor: ['#25fdff', '#ee7b8d'],
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Count/Value',
        },
        ticks: {
          callback: function (value) {
            return value / 1000 + 'k';
          },
          stepSize: 400,
        },
        min: 0,
      },
    },
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      }
    },
  };

  return (
      <div className="content">
        <div className="chart-row">
          <div className="chart-container">
            <h1 className="chart-title">Sales vs Orders</h1>
            <div className="chart-wrapper">
              <Line data={lineData} options={lineOptions} />
            </div>
          </div>
          <div className="chart-container">
            <h1 className="chart-title">Portion of Sales</h1>
            <div className="chart-wrapper">
              <Pie data={pieData} options={pieOptions} />
            </div>
          </div>
        </div>
      </div>
  );
};

export default Dashboard;
