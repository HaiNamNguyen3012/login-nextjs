"use client";
import Image from "next/image";
import LoginForm from "./pages/Login";
import Success from "./pages/Success";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function Home() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}
