var redis = require('redis'),
  client = redis.createClient(),
  elastic = require('../../config/elastic.js');

exports.postNew = function(req, res, next) {
  client.set(req.body.key, req.body.m, function(err, result) {
    if(err)
      res.json({ "Response": false, "Message": err });
    else {
      elastic.addDocument(req.body).then(function(result){res.json({ "Response": true, "Message": result })});
    }
  });
};

exports.getAll = function(req, res, next) {
  client.keys('*', function(err, keys) {
    if(err)
      return next(err);
    else {
      client.mget(keys, function(err, data) {
        if(err)
          res.json({ "Response": false, "Message": err });
        else {
          var reply = [];
          for(var i=0; i<data.length; i++)
            reply.push({ "Title": keys[i], "Content": data[i] });
          res.json({ "Response": true, "Message": reply });
        }
      });
    }
  });
};

exports.Search = function(req, res, next) {
  elastic.getSearch(req.params.q).then(function(result){res.json({ "Response": true, "Message": result.hits })});
};
