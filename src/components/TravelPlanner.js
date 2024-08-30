import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import citiesData from "../assets/cities.json"; // Import the JSON data
import "./TravelPlanner.css"; // Import the CSS file for styling

const TravelPlanner = () => {
  const [cities, setCities] = useState([]);
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [interests, setInterests] = useState([]);
  const [itinerary, setItinerary] = useState(null);
  const [cost, setCost] = useState(null);

  useEffect(() => {
    setCities(citiesData);
  }, []);

  const handleInterestChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setInterests([...interests, value]);
    } else {
      setInterests(interests.filter((i) => i !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedCity = cities.find((city) => city.name === destination);

    if (!selectedCity) {
      alert("Please select a valid destination.");
      return;
    }

    if (endDate <= startDate) {
      alert("End date must be after start date.");
      return;
    }

    const cityActivities = interests.flatMap(
      (interest) => selectedCity.activities[interest] || []
    );

    const totalCost = cityActivities.length * 50; // Placeholder cost calculation
    const days = (endDate - startDate) / (1000 * 60 * 60 * 24) + 1; // Calculate number of days (inclusive)
    const estimatedCost = totalCost * days + selectedCity.baseCost;

    setItinerary({
      city: selectedCity.name,
      activities: cityActivities,
    });
    setCost(estimatedCost);
  };

  return (
    <div className="travel-planner-container">
      <h1>Plan Your Trip</h1>
      <form onSubmit={handleSubmit} className="travel-planner-form">
        <div className="form-group">
          <label>Destination:</label>
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="form-control"
          >
            <option value="">Select a city</option>
            {cities.map((city) => (
              <option key={city.name} value={city.name}>
                {city.name}, {city.country}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Start Date:</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="yyyy/MM/dd"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>End Date:</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="yyyy/MM/dd"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Interests:</label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                value="adventure"
                onChange={handleInterestChange}
              />{" "}
              Adventure
            </label>
            <label>
              <input
                type="checkbox"
                value="relaxation"
                onChange={handleInterestChange}
              />{" "}
              Relaxation
            </label>
            <label>
              <input
                type="checkbox"
                value="culture"
                onChange={handleInterestChange}
              />{" "}
              Culture
            </label>
            <label>
              <input
                type="checkbox"
                value="food"
                onChange={handleInterestChange}
              />{" "}
              Food
            </label>
          </div>
        </div>
        <button type="submit" className="btn-submit">
          Get Itinerary
        </button>
      </form>
      {itinerary && (
        <div className="itinerary-container">
          <h2>Your Itinerary:</h2>
          <h3>City: {itinerary.city}</h3>
          <ul>
            {itinerary.activities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
          <h3>Estimated Cost: ${cost.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

export default TravelPlanner;
