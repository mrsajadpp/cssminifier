require("dotenv").config();
const express = require("express");
const UAParser = require('ua-parser-js');
const CleanCSS = require('clean-css');
const app = express();
const PORT = 3000;

// Middleware to parse User-Agent
app.use((req, res, next) => {
    const userAgent = req.headers['user-agent'];
    const parser = new UAParser(userAgent);
    const device = parser.getDevice();
    req.device = device;
    next();
});

// Middleware to verify RapidAPI secret
// app.use((req, res, next) => {
//     const rapidAPISecret = req.headers['x-rapidapi-proxy-secret'];
//     if (rapidAPISecret !== process.env.RAPIDAPI_SECRET) {
//         return res.status(403).json({ error: 'Forbidden: Invalid RapidAPI Secret' });
//     }
//     next();
// });

app.use(express.json());

// Route to minify CSS
app.post('/minify', (req, res) => {
    const { css } = req.body;

    if (!css) {
        return res.status(400).json({ error: 'Bad Request: No CSS provided' });
    }

    const output = new CleanCSS().minify(css);

    if (output.errors.length > 0) {
        return res.status(500).json({ error: 'Internal Server Error: Minification failed', details: output.errors });
    }

    res.json({ minifiedCSS: output.styles });
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Listening at http://127.0.0.1:${PORT}/`);
});
