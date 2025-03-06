/* global fetchAPI, submitAPI */ // ✅ Declare global API functions

import React, { useState, useEffect } from "react";

const BookingForm = () => {
  // State variables
  const [date, setDate] = useState(""); 
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [availableTimes, setAvailableTimes] = useState([]);

  // ✅ Fetch available times for a given date
  const fetchAvailableTimes = (selectedDate) => {
    const dateObject = new Date(selectedDate); // Ensure it's a Date object
    return fetchAPI(dateObject); // ✅ Uses global function from API script
  };

  // ✅ Initialize available times for today's date
  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0]; // Format as YYYY-MM-DD
    setDate(formattedDate);
    setAvailableTimes(fetchAvailableTimes(today)); // Pass Date object
  }, []);

  // ✅ Fetch new times whenever the user selects a different date
  useEffect(() => {
    if (date) {
      setAvailableTimes(fetchAvailableTimes(new Date(date))); // Convert to Date object
    }
  }, [date]);

  // ✅ Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = { date, time, guests, occasion };
    const response = submitAPI(formData); // ✅ Uses global function from API script

    if (response) {
      alert("Reservation submitted successfully!");
    } else {
      alert("Reservation failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", maxWidth: "300px", gap: "20px" }}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required>
        <option value="">Select a time</option>
        {availableTimes.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
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
      />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <button type="submit">Submit Reservation</button>
    </form>
  );
};

export default BookingForm;
