import React from "react";
import "./Analytics.css"; // Importing the associated CSS file

const Analytics = () => {
  return (
    <div className="analytics-container">
      <h2>Analytics</h2>
      <p>Data visualization and case progress metrics will appear here.</p>
      <div className="analytics-content">
        {/* Add your charts, graphs, or data visualization components here */}
        <div className="sample-graph">
          <p>Sample Graph (Bar/Line chart could go here)</p>
        </div>
        <div className="case-metrics">
          <p>Case Progress: 75%</p>
          <p>Pending Cases: 12</p>
          <p>Resolved Cases: 40</p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
