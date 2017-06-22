var router = require('express').Router();
var pg = require('pg');
var db = require('../config/db');
var pool;


router.get('/tech/:tech',function(request,response){
  pool = new pg.Pool(db);
  var allresources = [];

  pool.connect(function(err, client, done){
    if(err){
      console.error(err);
      if(client){
        return done(client);
      }
      return;
    }else{
      client.query(`SELECT * FROM resource where resource.techid = (SELECT (technologies.techid) FROM technologies where name = $1)`,[request.params.tech], function(err,result){
        if(err){
          console.error(err);
          return done(client);
        }else{
          for(var i = 0; i < result.rows.length;i++){
            allresources.push(result.rows[i]);
          }
          response.render('tech', {allresources:allresources});
        }
      });
      done();
    }
  });
  pool.end();
});

module.exports = router;
