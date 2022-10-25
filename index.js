let config = require('./config.js');
let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let mode = '';
let mongoose = require('mongoose');
let app = express();

console.log(`MONGO_URI= ${config.MONGO_URI}`);

let apiRoutes = require("./api-routes")

app.use(cors());

var path = require('path');

app.use(express.static(__dirname + '/views'));


// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


mongoose.connect(`${config.MONGO_URI}`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to mongo database");
    })
    .catch((err) => {
        console.log("Error connecting mongo database", err);
        process.exit(1);
    });

var db = mongoose.connection;

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.use('/api', apiRoutes);

app.listen(config.PORT, config.HOST, () => {
    console.log(`APP LISTENING ON http://127.0.0.1:${config.PORT}`);
})