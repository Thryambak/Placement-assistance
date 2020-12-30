const mongoose = require("mongoose");
const College = require('./College');
const Branch = require('./Branch');

const hasSchema = new mongoose.Schema({
//collegeid, branchid, avg pkg, plcmt %
collegeid:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'College'
},
branchid:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Branch'
},
placed: [{
    number: {
        type: Number
    },
    year: {
        type: Number
    }
}],
averagePackage:{
    type: Number,
    required:true
}
});
hasSchema.index({collegeid: 1, branchid: 1}, {unique: true});

const Has = mongoose.model("Has", hasSchema);

module.exports = Has;