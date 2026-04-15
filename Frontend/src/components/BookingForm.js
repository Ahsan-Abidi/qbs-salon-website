import React, { useState } from "react";
import axios from "axios";

function BookingForm() {
const [form, setForm] = useState({
name: "",
phone: "",
service: "",
date: ""
});

const handleChange = (e) => {
setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
e.preventDefault();

```
try {
  await axios.post("http://localhost:5000/api/bookings", form);
  alert("Booking Successful!");
} catch (err) {
  alert("Error booking appointment");
}
```

};

return ( <form onSubmit={handleSubmit}> <input name="name" placeholder="Name" onChange={handleChange} required /> <input name="phone" placeholder="Phone" onChange={handleChange} required />

```
  <select name="service" onChange={handleChange} required>
    <option value="">Select Service</option>
    <option>Hair Styling</option>
    <option>Facial</option>
    <option>Bridal Makeup</option>
  </select>

  <input type="date" name="date" onChange={handleChange} required />

  <button type="submit">Book Appointment</button>
</form>
);
}

export default BookingForm;