import React from 'react';
import './Dashboard.css';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const Dashboard = () => {
  // Bar chart data and options
  const barData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        label: 'Present',
        data: [44, 43, 45, 45, 44, 45],
        backgroundColor: '#3498db',
      },
    ],
  };

  const barOptions = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 2,
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: '#333',
          font: {
            size: 14,
          },
        },
      },
    },
  };

  // Doughnut chart (Worker Performance) data and options
  const pieData = {
    labels: ['Excellent', 'Good', 'Average', 'Below Average'],
    datasets: [
      {
        data: [40, 35, 15, 10],
        backgroundColor: ['#2ecc71', '#3498db', '#f1c40f', '#e74c3c'],
        hoverOffset: 4,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 18,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
    },
  };

  return (
    <div className="dashboard">
      <div className="maincontent">
        <div className="cards">
          <div className="card">
            <h3>Active Shifts</h3>
            <p>12 Workers</p>
            <i className="fas fa-users"></i>
          </div>
          <div className="card">
            <h3>Attendance Today</h3>
            <p>95%</p>
            <i className="fas fa-check-circle"></i>
          </div>
          <div className="card">
            <h3>Performance Rating</h3>
            <p>87%</p>
            <i className="fas fa-star"></i>
          </div>
          <div className="card">
            <h3>Total Workers</h3>
            <p>150</p>
            <i className="fas fa-user-friends"></i>
          </div>
        </div>

        {/* Charts section */}
        <div className="charts">
          <div className="chart-box">
            <h3>Attendance Overview</h3>
            <Bar data={barData} options={barOptions} />
          </div>
          <div className="chart-box">
            <h3>Performance Overview</h3>
            <Doughnut data={pieData} options={pieOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
