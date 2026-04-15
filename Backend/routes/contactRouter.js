const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", (req, res) => {
const { name, email, message } = req.body;

```
db.query(
    "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)",
    [name, email, message],
    (err) => {
        if (err) return res.status(500).send(err);
        res.send("Message saved");
    }
);
```

});

router.get("/", (req, res) => {
db.query("SELECT * FROM contacts", (err, result) => {
if (err) return res.status(500).send(err);
res.send(result);
});
});

module.exports = router;