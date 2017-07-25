module.exports = function(app){
  
  app.route('/', function(req, res){
    res.sendFile(process.cwd()+'views/index.html');
  });
  
  app.route('/:query', function(req, res){
    var query = req.params.query;
    
    if (Number(query)) {
      var unix = query;
      unixToNatural(query);
    }
    
    else 
    
  });
  
};
