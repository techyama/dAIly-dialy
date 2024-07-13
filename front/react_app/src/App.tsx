import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import Home from "./routes/Home";

const App: React.FC = () => {
  return (
      <div className="flex flex-col items-center min-h-screen bg-gray-200">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diarys" />
          <Route path="/profile" />
        </Routes>
      </div>
  );
};

export default App;
