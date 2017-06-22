var express = require('express');
var router = express.Router();
var pg = require('pg');
var bodyParser = require('body-parser');

router.get('/:tech',function(request,response){
  var allresources = [];
  pg.connect('postgres://something:something@localhost/webdev', function(err, client, done){
    if(err){
      if(client){
        return done(client);
      }
      return;
    }else{
      client.query(`SELECT * FROM resources where techid = (SELECT (techid) FROM tech where name = ${request.params.tech})`, function(err,result){
        if(err){
          return done(client);
        }else{
          for(var i=0; i < result.rows.length;i++){
            allresources.push(result.rows[i]);
          }
          response.render('tech', {allresources:allresources});
          done();
          pg.end();
        }
      });
    }
  });
});

module.exports = router;
