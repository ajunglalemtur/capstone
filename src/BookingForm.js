/* global fetchAPI, submitAPI */ 

import React, { useState, useEffect } from "react";

const BookingForm = () => {
  // State variables
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [availableTimes, setAvailableTimes] = useState([]);
  const [errors, setErrors] = useState({}); // Store validation errors

  // ✅ Fetch available times for a given date
  const fetchAvailableTimes = (selectedDate) => {
    const dateObject = new Date(selectedDate);
    return fetchAPI(dateObject);
  };

  // ✅ Initialize available times for today's date
  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];
    setDate(formattedDate);
    setAvailableTimes(fetchAvailableTimes(today));
  }, []);

  // ✅ Fetch new times whenever the user selects a different date
  useEffect(() => {
    if (date) {
      setAvailableTimes(fetchAvailableTimes(new Date(date)));
    }
  }, [date]);

  // ✅ Form validation logic
  const validateForm = () => {
    let newErrors = {};
    
    if (!date) newErrors.date = "Date is required.";
    if (!time) newErrors.time = "Time selection is required.";
    if (guests < 1 || guests > 10) newErrors.guests = "Guests must be between 1 and 10.";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // ✅ Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formData = { date, time, guests, occasion };
    const response = submitAPI(formData);

    if (response) {
      alert("Reservation submitted successfully!");
    } else {
      alert("Reservation failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", maxWidth: "300px", gap: "15px" }}>
      {/* Date Selection */}
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      {errors.date && <span style={{ color: "red" }}>{errors.date}</span>}

      {/* Time Selection */}
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required>
        <option value="">Select a time</option>
        {availableTimes.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>
      {errors.time && <span style={{ color: "red" }}>{errors.time}</span>}

      {/* Guests Input */}
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
        min="1"
        max="10"
        required
      />
      {errors.guests && <span style={{ color: "red" }}>{errors.guests}</span>}

      {/* Occasion Dropdown */}
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      {/* Submit Button - Disabled if form is invalid */}
      <button type="submit" disabled={Object.keys(errors).length > 0}>Submit Reservation</button>
    </form>
  );
};

export default BookingForm;
