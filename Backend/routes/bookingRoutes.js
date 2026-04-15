const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", (req, res) => {
const { name, phone, service, date } = req.body;

```
db.query(
    "INSERT INTO bookings (name, phone, service, date) VALUES (?, ?, ?, ?)",
    [name, phone, service, date],
    (err) => {
        if (err) return res.status(500).send(err);
        res.send("Booking saved");
    }
);
```

});


router.get("/", (req, res) => {
db.query("SELECT * FROM bookings", (err, result) => {
if (err) return res.status(500).send(err);
res.send(result);
});
});

module.exports = router;