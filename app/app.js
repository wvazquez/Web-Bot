var express = require('express');
var app = express();
var pg = require('pg');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('./app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/tech'));
app.use(require('./routes/admin'));

app.set('view engine', 'ejs');
app.set('views','app/views');

const PORT = process.env.PORT || 3030;
app.listen(PORT,function(){
  console.log('listening on PORT: ' + PORT);
});
