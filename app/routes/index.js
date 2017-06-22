var express = require('express');
var router = express.Router();
var pg = require('pg');
var bodyParser = require('body-parser');

router.get('/', function(request, response){
  var alltech = [];
  pg.connect('postgres://something:something@localhost/webdev', function(err, client, done){
    if(err){
      if(client){
        return done(client);
      }
      return;
    }else{
      client.query(`SELECT * FROM tech`, function(err, result){
        if(err){
          return done(client);
        }else{
          for(var i = 0; i < result.rows.length; i++){
            alltech.push(result.rows[i]);
          }
          response.render('index', {alltech:alltech});
          done();
          pg.end();
        }
      });
    }
  });
});

module.exports = router;
