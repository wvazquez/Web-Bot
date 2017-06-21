var express = require('express');
var app = express();

app.use(express.static('app/public'));

app.set('view engine', 'ejs');
app.set('views','app/views');

app.get('/', function(request, response){
  response.render('index');
});

app.listen(3030,function(){
  console.log('listening on port 3030');
});
