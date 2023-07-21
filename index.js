// Express app to display static html with js and css
const express = require('express');
const app = express();

// serve static files from public folder
app.use(express.static('public'));

// endpoint for index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/pages/index.html');
});     

// contact
app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/pages/contact.html');
});

// about
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/pages/about.html');
});

// experience
app.get('/experience', (req, res) => {
    res.sendFile(__dirname + '/pages/project-experience.html');
});



app.listen(3000, () => console.log('Listening on port 3000!'));
