import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import "./../styles/Dashboard.css";

function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [category, setCategory] = useState("");
  const [sortBy, setSortBy] = useState("");

  const fetchTransactions = useCallback(async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/transactions", {
        params: { category, sort_by: sortBy },
      });
      setTransactions(response.data.transactions);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  }, [category, sortBy]);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="filters">
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Groceries">Groceries</option>
          <option value="Dining">Dining</option>
          <option value="Electricity">Electricity</option>
        </select>
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="">Sort By</option>
          <option value="highest">Highest</option>
          <option value="lowest">Lowest</option>
        </select>
      </div>
      <ul className="transaction-list">
        {transactions.map((transaction, index) => (
          <li key={index}>
            <span>{transaction.description}</span>
            <span>${transaction.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
