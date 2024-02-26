// src/App.js
import React from "react";
import LandingPage from "./Components/Main";
import HistoryPage from "./Components/History";
import TeamPage from "./Components/Team";

const App = () => {
  return (
    <div>
      <LandingPage />
      <HistoryPage />
      <TeamPage />
    </div>
  );
};

export default App;
