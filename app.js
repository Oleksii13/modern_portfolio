var path = require('path');
var express = require('express');
const port = process.env.PORT || 3000;

var app = express();

var staticPath = path.join(__dirname, '/dist');
app.use(express.static(staticPath));

app.listen(port, function() {
  console.log('listening');
});
