const express = require("express");
const app = express();
const port = 3000;

function CheckMiddleware(req, res, next) {
    const age = req.query.age;
    if (age >= 18) {
        next(); 
    } else {
        next(new Error("Sorry!! you are not eligible"));
    }
}

app.get("/ride1", CheckMiddleware, function(req, res) {
    res.json({
        msg: "You have successfully riden ride 1"
    });
});

app.get("/ride2", CheckMiddleware, function(req, res) {
    res.json({
        msg: "You have successfully riden ride 2"
    });
});

// Global error-handling middleware
app.use(function(err, req, res, next) {
    console.error(err.stack); // Log the error details for debugging

    res.status(500).json({
        // error: err.message // Send the error message as the response
        error: 'Something failed!'
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
