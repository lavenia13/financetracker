import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Expenses from "./components/Expenses";
import Insights from "./components/Insights";
import BudgetTips from "./components/BudgetTips"; // ✅ Import new component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/budget-tips" element={<BudgetTips />} /> {/* ✅ New route */}
      </Routes>
    </Router>
  );
}

export default App;
