const express = require("express");
const app = express();

app.listen(4000, () => {
    console.log("Application backend running on localhost:4000.");
})

app.get('/', (req, res) => {
    return res.json({
        message: "Testing - Hello World!"
    })
});