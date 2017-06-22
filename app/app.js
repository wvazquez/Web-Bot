var express = require('express');
var app = express();
var pg = require('pg');
var bodyParser = require('body-parser');

app.use(express.static('./app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/tech'));

app.set('view engine', 'ejs');
app.set('views','app/views');



app.listen(3030,function(){
  console.log('listening on port 3030');
});
