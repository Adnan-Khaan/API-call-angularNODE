var express = require('express');
var https = require('https');
var app = express();


app.use(express.static(__dirname + "/public"));
 var lower=0; //Seting offset perameters to get data in managable size.
 var upper =0; 

 app.get('/contactlist', function (request, response) {
        if(lower==0) 
        {
          lower=1;
          upper=500;
           }
         else 
         {
          lower=upper;
          upper=upper+500;
         } 
  //Getting JSON data from API .
  var reqGet = https.get('<-----API URL goes here--->'+lower+'&limit='+upper, function(res) {
          
            var body='';
            res.on('data', function(d) {
                 body+=d;
                });
            //Formatting the data 
            res.on('end', function(){
                 var carlypsojson = JSON.parse(body);
                  response.json(carlypsojson);  
                  
            }).on('error', function(e){
                      console.log("Got an error: ", e);
            });
            
            reqGet.on('error', function(e) {
                       console.error(e);

            });
            
              });
                 });


app.listen(3000);
console.log("Xpress is running on 3000 ");

      		

	