import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./Nav";
import Header from "./Header";
import Main from "./Main";
import Testimonials from "./Testimonials";
import About from "./About";
import Footer from "./Footer";

import BookingPage from "./BookingPage"; // Import the Booking Page

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<>
            <Header />
            <Main />
            <Testimonials />
            <About />
          </>} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
