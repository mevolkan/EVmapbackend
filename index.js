let config =  require('./config.js');
let express = require('express');
let bodyParser = require('body-parser');
const cors = require('cors');
let mode = '';


let mongoose = require('mongoose');

let app = express();

console.log(`NODE_ENV=${config.NODE_ENV}`);

let apiRoutes = require("./api-routes")

app.use(cors());

var path = require('path');

app.use(express.static(__dirname + '/views'));


// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


mongoose.connect('mongodb://localhost/evmap', { useNewUrlParser: true,useUnifiedTopology: true });

var db = mongoose.connection;

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.use('/api', apiRoutes);

app.listen(config.PORT, config.HOST, () => {
    console.log(`APP LISTENING ON http://${config.HOST}:${config.PORT}`);
})