import React, { useEffect } from 'react';
import './Attendance.css';
import { Chart } from 'chart.js';

const Attendance = () => {

  useEffect(() => {
    // Attendance Pie Chart
    var ctxPie = document.getElementById('attendancePieChart').getContext('2d');
    new Chart(ctxPie, {
      type: 'doughnut',
      data: {
        labels: ['Checked In', 'Not Checked In', 'On Leave'],
        datasets: [{
          label: 'Attendance',
          data: [4500, 500, 456],
          backgroundColor: ['#2ed573', '#ff4757', '#ffa502']
        }]
      }
    });

    // On Time Check In Bar Chart
    var ctxOnTime = document.getElementById('onTimeCheckInChart').getContext('2d');
    new Chart(ctxOnTime, {
      type: 'bar',
      data: {
        labels: ['Sep 5', 'Sep 6', 'Sep 7', 'Sep 8', 'Sep 9', 'Sep 10', 'Sep 11'],
        datasets: [{
          label: 'On Time Check In (mins)',
          data: [10, 5, 8, 12, 9, -2, -4],
          backgroundColor: '#2ed573'
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Minutes'
            }
          }
        }
      }
    });

    // Overtime Bar Chart
    var ctxOvertime = document.getElementById('overtimeChart').getContext('2d');
    new Chart(ctxOvertime, {
      type: 'bar',
      data: {
        labels: ['Sep 5', 'Sep 6', 'Sep 7', 'Sep 8', 'Sep 9', 'Sep 10', 'Sep 11'],
        datasets: [{
          label: 'Overtime (hours)',
          data: [10, 12, 8, 5, 15, 20, 40],
          backgroundColor: '#ffa502'
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Hours'
            }
          }
        }
      }
    });
  }, []);

  return (
    <div className="attendance">
      <div class="maincontent1">
        <header class="dashboard-header">
          <h1>Attendance Tracking</h1>
        </header>

        <section class="statistics">
          <div class="card">
            <h3>Total Employees</h3>
            <div class="pie-chart">
              <canvas id="attendancePieChart"></canvas>
            </div>
            <p>5000 Employees</p>
          </div>

          <div class="card checked-in">
            <img src="checkin-icon.png" alt="Checked In Icon" class="card-icon" />
            <h3>Checked In</h3>
            <p>4500</p>
          </div>

          <div class="card not-checked-in">
            <img src="notcheckin-icon.png" alt="Not Checked In Icon" class="card-icon" />
            <h3>Not Checked In</h3>
            <p>500</p>
          </div>

          <div class="card on-leave">
            <img src="leave-icon.png" alt="On Leave Icon" class="card-icon" />
            <h3>On Leave</h3>
            <p>456</p>
          </div>

          <div class="card checked-out">
            <img src="checkout-icon.png" alt="Checked Out Icon" class="card-icon" />
            <h3>Checked Out</h3>
            <p>250</p>
          </div>

          <div class="card weekly-off">
            <img src="weekoff-icon.png" alt="Weekly Off Icon" class="card-icon" />
            <h3>Weekly Off</h3>
            <p>145</p>
          </div>

          <div class="card holiday">
            <img src="holiday-icon.png" alt="Holiday Icon" class="card-icon" />
            <h3>Holiday</h3>
            <p>12</p>
          </div>
        </section>

        <section class="charts">
          <div class="chart-container">
            <h3>On Time Check In</h3>
            <canvas id="onTimeCheckInChart"></canvas>
          </div>
          <div class="chart-container">
            <h3>Overtime</h3>
            <canvas id="overtimeChart"></canvas>
          </div>
        </section>

        <section class="attendance-source">
          <h3>Attendance Source</h3>
          <div class="source-details">
            <div class="source-card">
              <h4>Device Check-Ins</h4>
              <p>2000</p>
            </div>
            <div class="source-card">
              <h4>App Check-Ins</h4>
              <p>2500</p>
            </div>
          </div>
        </section>

        <section class="exceptions">
          <h3>Exceptions</h3>
          <div class="exception-details">
            <div class="exception-card">
              <h4>Late Coming</h4>
              <p>250</p>
            </div>
            <div class="exception-card">
              <h4>Early Going</h4>
              <p>500</p>
            </div>
          </div>
        </section>

        <section class="pending-requests">
          <h3>Pending Requests</h3>
          <div class="pending-details">
            <div class="pending-card">
              <h4>Regularization Requests</h4>
              <p>250</p>
            </div>
            <div class="pending-card">
              <h4>Leave Requests</h4>
              <p>500</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Attendance;
