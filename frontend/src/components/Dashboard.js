import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="visualization-grid">
        <div className="visualization-box">Visualization 1</div>
        <div className="visualization-box">Visualization 2</div>
        <div className="visualization-box">Visualization 3</div>
        <div className="visualization-box">Visualization 4</div>
      </div>
    </div>
  );
};

export default Dashboard;
