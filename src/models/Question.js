const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    topic: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    round: {
        type: String
    },
    companyname: {
        type: String,
      //  ref: 'Company',
        required: true
    },
    collegeid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'College',
        required: true
    },
    branchname: {
        type:String,
       // ref: 'Branch'
    }
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;