var moment = require('moment');

module.exports = function(app){
  
  
  
  app.route('/').get(function(req, res){
    res.sendFile(process.cwd()+'/views/index.html');
  });
  
  app.route('/:query').get(function(req, res){
    var json = {
    "unix": null,
    "natural": null
  };
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
