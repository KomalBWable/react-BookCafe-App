import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./home";
import BookTransactions from "./bookTransactions";
import RequestNewBook from "./requestNewBook";
import ContactUs from "./contactUs";
import Navbar from "./Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/bookTransactions" element={<BookTransactions />} />
        <Route exact path="/requestNewBook" element={<RequestNewBook />} />
        <Route exact path="/contactUs" element={<ContactUs />} />
      </Routes>
    </>
  );
};
export default App;
