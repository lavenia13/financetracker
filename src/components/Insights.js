import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import axios from "axios";
import "./../styles/Insights.css";

function Insights() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    fetchTrends();
  }, []);

  const fetchTrends = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/spending-trends");
      console.log("Spending Trends Data:", response.data);
      setTrends(response.data.trends);
    } catch (error) {
      console.error("Error fetching trends:", error);
    }
  };

  return (
    <div className="insights-container">
      <h1>Spending Trends</h1>
      {trends.length > 0 ? (
        <LineChart width={600} height={300} data={trends}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="amount" stroke="#82ca9d" />
        </LineChart>
      ) : (
        <p>No spending trends available.</p>
      )}
    </div>
  );
}

export default Insights;
