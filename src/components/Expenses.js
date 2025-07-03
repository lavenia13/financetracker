import React, { useState, useEffect } from "react";
import axios from "axios";
import "./../styles/Expenses.css";

function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/expenses")
      .then(response => {
        console.log("Expenses Data:", response.data); // Debugging
        setExpenses(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching expenses:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="expenses-container">
      <h1>Expenses</h1>
      {loading ? (
        <p>Loading...</p>
      ) : expenses.length > 0 ? (
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>
              <span>{expense.description}</span>
              <span>${expense.amount}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No expenses found.</p>
      )}
    </div>
  );
}

export default Expenses;
