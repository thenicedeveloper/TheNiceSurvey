const mongoose = require('mongoose');
const { Schema } = mongoose;

const surveySchema = new Schema({
    title: String,
    questions: [],
    recipients: [],
    survey: {
        taken: false,
        id: String
    }
})


module.exports = mongoose.model('surveys', surveySchema);