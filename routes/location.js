
module.exports = function (app) {
      // Gets the coordinates.
        app.get('/geolocations', function (req, res) {
            var html='';
            html +="<body>";
            html += "<form action='/directions'  method='post' name='form1'>";
            html += "<p> Lat: <input type= 'text' name='latitude'>";
            html += "<p> Lon: <input type= 'text' name='longitude'>";
            html += "<input type='submit' value='Get Direction'></p>";   
            html += "</form>";
            html += "</body>";
            res.send(html);
        });

        // Displays the map.
        app.post('/directions', function (req, res) {
            console.log("Lat= " + req.body.latitude);
            console.log("Lon= " + req.body.longitude);
            var html='';
            html +="<body>";
            html += "<form>";
            html += "<iframe src='https://embed.waze.com/iframe?zoom=50&lat="+req.body.latitude+"&lon="+req.body.longitude+"&pin=1'width='100%' height='520'></iframe>"; 
            html += "</form>";
            html += "</body>";
            res.send(html);
        });
};