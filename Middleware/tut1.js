const express = require("express");
const app = express();
const port = 3000;

let globalCounter = 0;

function calCulatesum(counter) {
    let sum = 0;
    for (let i = 1; i <= counter; i++) { // Start from 1
        sum += i;
    }
    return sum;
}

function routeHandler(req, res) {
    globalCounter++;
    var ans = calCulatesum(globalCounter);
    console.log(`Total request ${globalCounter} and sum is ${ans}`);
    res.send(`The sum is = ${ans}`);
}

app.get("/FindSum", routeHandler);


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
