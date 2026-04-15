import React, { useState } from "react";
import axios from "axios";

function Contact() {
const [form, setForm] = useState({});

const handleChange = e => {
setForm({ ...form, [e.target.name]: e.target.value });
};

const submit = async e => {
e.preventDefault();
await axios.post("http://localhost:5000/api/contact", form);
alert("Message sent!");
};

return ( <form onSubmit={submit}> <input name="name" placeholder="Name" onChange={handleChange} /> <input name="email" placeholder="Email" onChange={handleChange} /> <textarea name="message" placeholder="Message" onChange={handleChange} /> <button>Send</button> </form>
);
}

export default Contact;