import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Comments from "./components/Comments";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Comments />} />
      </Routes>
    </Router>
  );
}

export default App;
