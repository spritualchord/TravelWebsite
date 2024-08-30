// server/index.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cities = require("../src/assets/cities.json"); // Adjust path as necessary

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Endpoint to handle trip planning
app.post("/api/plan-trip", (req, res) => {
  const { destination, startDate, endDate, interests } = req.body;

  // Find the city data
  const city = cities.find(
    (c) => c.name.toLowerCase() === destination.toLowerCase()
  );
  if (!city) {
    return res.status(404).json({ message: "City not found" });
  }

  // Generate the itinerary based on interests
  const itinerary = {};
  interests.forEach((interest, index) => {
    itinerary[`day${index + 1}`] = city.activities[interest].join(", ");
  });

  // Calculate the cost
  const cost = city.baseCost + interests.length * 100;

  res.json({ itinerary, cost });
});

// Server listens on a specified port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
