// requirements
var mongoose = require('mongoose');
var database_name = 'placements-app';
var connectionURL = 'mongodb://127.0.0.1:27017/'+database_name;

//connection
mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});