var router = require('express').Router();
var pg = require('pg');
var db = require('../config/db');
var pool;

router.get('/admin', function(request, response){
    response.render('admin');
});

router.post('/admin', function(request, response){
  pool = new pg.Pool(db);
  pool.connect(function(err, client, done){
    if(err){
      if(client){
        return done(client);
      }
      return;
    }else{
      client.query(`INSERT INTO resource (section,title,topic,description,difficulty,website_name,resource_url,img_url,techid) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`,[request.body.section, request.body.title, request.body.topic, request.body.description, request.body.difficulty, request.body.website_name, request.body.resource_url, request.body.img_url, request.body.techid], function(err, result){
        if(err){
          return done(client);
        }else{
          response.redirect('/admin');
        }
      });
      done();
    }
  });
  pool.end();
});

module.exports = router;
