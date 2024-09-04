const express = require('express');
const app = express();
const port = 3000;

let numberOfRequestsForUser = {};


function rateLimitMiddleware(req, res, next) {
    const userId = req.headers['user-id'];
    if (!userId) {
        res.status(400).json({ error: 'User ID header is missing' });
    }

    if (!numberOfRequestsForUser[userId]) {
        numberOfRequestsForUser[userId] = 1;
    } else {
        numberOfRequestsForUser[userId]++;
    }

    if (numberOfRequestsForUser[userId] > 5) {
        setTimeout(() => {
            numberOfRequestsForUser[userId] = 1; // Reset request count after 1 second
        }, 10000);
        res.status(429).json({ error: 'Too many requests. Please try again in 10 second.' });
    }

    next();
}



app.use(rateLimitMiddleware);


app.get('/user', function(req, res) {
    const username = req.headers['user-id'];
    res.status(200).json({ name: username });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});