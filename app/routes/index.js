var router = require('express').Router();
var pg = require('pg');
var db = require('../config/db');
var pool;


router.get('/', function(request, response){
  pool = new pg.Pool(db);
  var alltech = [];
  pool.connect(function(err, client, done){
    if(err){
      if(client){
        return done(client);
      }
      return;
    }else{
      client.query(`SELECT * FROM technologies`, function(err, result){
        if(err){
          return done(client);
        }else{
          for(var i = 0; i < result.rows.length; i++){
            alltech.push(result.rows[i]);
          }
          response.render('index', {alltech:alltech});
        }
      });
      done();
    }
  });
  pool.end();
});

module.exports = router;
