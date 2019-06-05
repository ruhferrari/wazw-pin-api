
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

        app.get('/risk_areas', function (req, res) {
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify([{"district": 'Villa María del Triunfo',"latitude": -12.158792,"longitude": -76.929747},{"district": 'Villa El Salvador',"latitude": -12.204663,"longitude": -76.952769},{"district": 'San Juan de Lurigancho',"latitude": -11.968713,"longitude": -76.993997},{"district": 'Carabayllo',"latitude": -11.792829,"longitude": -76.987340}]));
        });

        // Displays the map.
        app.post('/directions', function (req, res) {
            console.log("Lat= " + req.body.latitude);
            console.log("Lon= " + req.body.longitude);
            var html='';
            html +="<html>";
            html +="<body>";
            html += "<form>";
            html += "<iframe src='https://embed.waze.com/iframe?zoom=14&lat="+req.body.latitude+"&lon="+req.body.longitude+"&pin=1'width='100%' height='520'></iframe>"; 
            html += "</form>";
            html += "</body>";
            html += "</html>";
            res.send(html);
        });
};