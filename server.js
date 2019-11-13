const express = require('express');
const app = express();

// Setup express static middleware to look for files in the api directory for all requests starting with /api
app.use('/api', express.static('api') , function(req, res){
    // Optional 404 handler
    res.status(404);
    res.json({error:{code:404}})
});


var server = app.listen(8080, () => {

   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://localhost", host, port)

})