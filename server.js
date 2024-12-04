const express = require("express");
const app = express();

const PORT = 3000; // Change port if needed

// Middleware
app.use(express.json()); // Parses incoming JSON requests

// Basic route
app.get("/", (req, res) => {
  const html = `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Server Status</title>
            <style>
              body {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                background-color: #f0f0f0;
                margin: 0;
                font-family: Arial, sans-serif;
              }
              .container {
                text-align: center;
                background-color: #fff;
                padding: 50px;
                border-radius: 10px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              }
              h1 {
                color: #4caf50;
                font-size: 2.5em;
              }
              p {
                color: #333;
                font-size: 1.2em;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>Your server is running perfectly</h1>
              <p>Everything is working as expected!</p>
            </div>
          </body>
        </html>
      `;
  res.send(html);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
