import React, { useEffect, useState } from "react";
import axios from "axios";

function Admin() {
const [bookings, setBookings] = useState([]);
const [contacts, setContacts] = useState([]);

useEffect(() => {
axios.get("http://localhost:5000/api/bookings").then(res => setBookings(res.data));
axios.get("http://localhost:5000/api/contact").then(res => setContacts(res.data));
}, []);

return (
<div style={{ padding: "40px" }}> <h1>Admin Dashboard</h1>

```
  <h2>Bookings</h2>
  <table border="1">
    <tbody>
      {bookings.map((b, i) => (
        <tr key={i}>
          <td>{b.name}</td>
          <td>{b.phone}</td>
          <td>{b.service}</td>
          <td>{b.date}</td>
        </tr>
      ))}
    </tbody>
  </table>

  <h2>Messages</h2>
  <table border="1">
    <tbody>
      {contacts.map((c, i) => (
        <tr key={i}>
          <td>{c.name}</td>
          <td>{c.email}</td>
          <td>{c.message}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

);
}

export default Admin;