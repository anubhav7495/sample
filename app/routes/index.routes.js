module.exports = function(app) {
  var index = require('../controllers/index.controller.js');

  app.route('/')
    .get(index.getAll)
    .post(index.postNew);

  app.get('/search/:q', index.Search);  
}
