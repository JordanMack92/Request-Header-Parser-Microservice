var moment = require('moment');

module.exports = function(app){
  
  var json = {
    "unix": null,
    "natural": null
  }
  
  app.route('/', function(req, res){
    res.sendFile(process.cwd()+'views/index.html');
  });
  
  app.route('/:query', function(req, res){
    var query = req.params.query;
    
    if (!Number(query) && new Date(query) == 'Invalid Date'){
      res.send(json);
    }
    
    if (Number(query)) {
      json.unix = query;
      json.natural = moment.unix(query).format("MMMM Do, YYYY");
    }
    
    else {
      json.natural = query;
      var date = new Date(query);
      json.unix = (date.getTime()/1000).toFixed(0);
    }
    
    res.send(json);
    
  });
  
};
