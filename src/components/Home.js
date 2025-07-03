import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./../styles/Home.css";

function Home() {
  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="home-hero">
        <motion.h1
          className="home-title"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to Personal Finance Manager
        </motion.h1>
        <motion.p
          className="home-description"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Manage your expenses and discover insights with AI-powered tools.
        </motion.p>
        <Link to="/dashboard" className="home-button">
          Get Started
        </Link>
      </div>
    </motion.div>
  );
}

export default Home;
