// Express app to display static html with js and css
const express = require('express');
const app = express();
app.use(express.static('public'));

// endpoint for index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});     

app.listen(3000, () => console.log('Listening on port 3000!'));
