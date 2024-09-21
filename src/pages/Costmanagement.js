import React, { useState, useEffect } from 'react';
import { Chart, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import './Costmanagement.css';

// Register the required Chart.js components
Chart.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

// Move employeeData and expenseData outside the component
const employeeData = {
  totalSalary: [60000, 62000, 58000, 59000, 61000, 63000, 60000, 64000, 65000, 62000, 61000, 66000],
  overtimeSalary: [5000, 4500, 5500, 6000, 5200, 4800, 5000, 5200, 5300, 4900, 5100, 5500],
  taxReduction: [2000, 1800, 2200, 2100, 2400, 2300, 2000, 2100, 2050, 2200, 2300, 2500],
};

const expenseData = {
  monthlyProductCosts: [3000, 3500, 4000, 3700, 4500, 4600, 4800, 5000, 4900, 5200, 5300, 5500],
  monthlyComponentCosts: [1000, 1200, 1500, 1400, 1600, 1700, 1800, 2000, 1900, 2100, 2200, 2300],
};

const CostManagement = () => {
  const [totalSalary, setTotalSalary] = useState(0);
  const [overtimeSalary, setOvertimeSalary] = useState(0);
  const [taxReduction, setTaxReduction] = useState(0);

  useEffect(() => {
    // Update totals for employee costs
    setTotalSalary(employeeData.totalSalary.reduce((a, b) => a + b, 0));
    setOvertimeSalary(employeeData.overtimeSalary.reduce((a, b) => a + b, 0));
    setTaxReduction(employeeData.taxReduction.reduce((a, b) => a + b, 0));

    // Create employee costs chart
    const employeeCtx = document.getElementById('employeeChart').getContext('2d');
    new Chart(employeeCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Total Salary',
            data: employeeData.totalSalary,
            borderColor: '#4CAF50',
            backgroundColor: 'rgba(76, 175, 80, 0.2)',
            fill: true,
          },
          {
            label: 'Overtime Salary',
            data: employeeData.overtimeSalary,
            borderColor: '#2196F3',
            backgroundColor: 'rgba(33, 150, 243, 0.2)',
            fill: true,
          },
          {
            label: 'Tax Reduction',
            data: employeeData.taxReduction,
            borderColor: '#FFC107',
            backgroundColor: 'rgba(255, 193, 7, 0.2)',
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Create expense chart
    const expenseCtx = document.getElementById('expenseChart').getContext('2d');
    new Chart(expenseCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Product Costs',
            data: expenseData.monthlyProductCosts,
            borderColor: '#FF6384',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: true,
          },
          {
            label: 'Component Costs',
            data: expenseData.monthlyComponentCosts,
            borderColor: '#36A2EB',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, []); // Since employeeData and expenseData are now stable, no need to add them as dependencies

  return (
    <div className="cost-management">
      <div className="container">
        <div className="cost-section">
          <h2>Cost Management</h2>
          <div className="employee-costs">
            <h3>Employee Costs</h3>
            <div className="cost-box">
              <label>Total Employee Salary:</label>
              <span id="total-salary">${totalSalary.toLocaleString()}</span>
            </div>
            <div className="cost-box">
              <label>Overtime Salary:</label>
              <span id="overtime-salary">${overtimeSalary.toLocaleString()}</span>
            </div>
            <div className="cost-box">
              <label>Tax Reduction:</label>
              <span id="tax-reduction">${taxReduction.toLocaleString()}</span>
            </div>
          </div>
          <canvas id="employeeChart"></canvas>
        </div>
        <div className="expense-section">
          <h2>Product & Component Expenses</h2>
          <div className="expense-details">
            <h3>Monthly Expenses</h3>
            <canvas id="expenseChart"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostManagement;
