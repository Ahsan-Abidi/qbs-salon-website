const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const bookingRoutes = require("./routes/bookingRoutes");
const contactRoutes = require("./routes/contactRoutes");

app.use("/api/bookings", bookingRoutes);
app.use("/api/contact", contactRoutes);

app.listen(5000, () => {
console.log("Server running on port 5000");
});