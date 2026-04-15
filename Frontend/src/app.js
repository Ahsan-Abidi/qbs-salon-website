import React from "react";
import Gallery from "./components/Gallery.js";
import Navbar from "./components/navbar.js";
import Home from "./components/Home.js";
import About from "./components/about.js";
import Services from "./components/Services.js";
import BookingForm from "./components/BookingForm.js";
import Contact from "./components/Contact.js";
import "./App.css";

function App() {
return ( <div> <Navbar /> <Home /> <About /> <Services />

```
  <section id="booking">
    <h2 style={{ textAlign: "center" }}>Book Appointment</h2>
    <BookingForm />
  </section>

  <Contact />
</div>
);
}

export default App;