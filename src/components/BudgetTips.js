import React, { useState } from "react";
import axios from "axios";
import "./../styles/BudgetTips.css";

function BudgetTips() {
  const [input, setInput] = useState("");
  const [tips, setTips] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchBudgetTips = async () => {
    if (!input) return;
    setLoading(true);

    try {
      const response = await axios.post("http://127.0.0.1:5000/budget-tips", { input });
      setTips(response.data.tips);
    } catch (error) {
      console.error("Error fetching budget tips:", error);
      setTips("Error fetching budget tips. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="budget-tips-container">
      <h1>AI Budgeting Tips</h1>
      <textarea
        placeholder="Enter your financial question..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={fetchBudgetTips} disabled={loading}>
        {loading ? "Generating..." : "Get Budgeting Tips"}
      </button>
      {tips && <div className="budget-tips-result"><p>{tips}</p></div>}
    </div>
  );
}

export default BudgetTips;
