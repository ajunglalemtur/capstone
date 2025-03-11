/* global fetchAPI, submitAPI */ 

import React, { useState, useEffect } from "react";

const BookingForm = () => {
  const [date, setDate] = useState(""); 
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [availableTimes, setAvailableTimes] = useState([]);

  const fetchAvailableTimes = (selectedDate) => {
    const dateObject = new Date(selectedDate);
    return fetchAPI(dateObject);
  };

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setDate(today);
    setAvailableTimes(fetchAvailableTimes(today));
  }, []);

  useEffect(() => {
    if (date) {
      setAvailableTimes(fetchAvailableTimes(new Date(date)));
    }
  }, [date]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { date, time, guests, occasion };
    const response = submitAPI(formData);

    if (response) {
      alert("Reservation submitted successfully!");
    } else {
      alert("Reservation failed. Please try again.");
    }
  };

  return (
    <section>
      <h2>Reserve Your Table</h2>
      <form 
        onSubmit={handleSubmit} 
        className="reservation-form"
        aria-labelledby="form-heading"
      >
        <label htmlFor="res-date">Choose date</label>
        <input 
          type="date" 
          id="res-date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
          required 
          aria-required="true"
        />

        <label htmlFor="res-time">Choose time</label>
        <select 
          id="res-time" 
          value={time} 
          onChange={(e) => setTime(e.target.value)} 
          required
          aria-required="true"
        >
          <option value="">Select a time</option>
          {availableTimes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input 
          type="number" 
          id="guests" 
          value={guests} 
          onChange={(e) => setGuests(e.target.value)} 
          min="1" 
          max="10" 
          required 
          aria-required="true"
        />

        <label htmlFor="occasion">Occasion</label>
        <select 
          id="occasion" 
          value={occasion} 
          onChange={(e) => setOccasion(e.target.value)} 
          required
          aria-required="true"
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>

        <button type="submit" className="submit-btn" aria-label="Submit Reservation">
          Submit Reservation
        </button>
      </form>
    </section>
  );
};

export default BookingForm;
