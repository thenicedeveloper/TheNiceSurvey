const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Survey = mongoose.model('surveys');


//GET public @route to /api/surveys/ 
router.get('/',async (req, res) => {
    Survey.find({}).sort('survey').exec((err, data) =>{ 

        res.send(data)      
    
    })

    // let survey1 = new Survey({
    //     title: 'Survey2',
    //     questions: ['q3', 'q4'],
    //     recipients: [{email: 'sample2@gmail.com', responded: true}],
    //     token: '346',
    //     survey: {taken: false, id: '2'}
    // })

    // survey1.save()
    // console.log("survey saved")
})

// router.post('/', async(req, res) => {
    
// })


module.exports = router;



// let survey1 = new Survey({
//     title: 'Survey1',
//     questions: ['q3', 'q4'],
//     recipients: [{email: 'sample2@gmail.com', responded: true}],
//     token: '346',
//     survey: {taken: false, id: '2'}
// })

// survey1.save()
// Survey.findById('5e8cdbe1e0d63b28f4d53837', function(err, data) {
    // if(err) throw err;
    // console.log('Working...')
    // data.survey.taken = false
    // data.save()
    // console.log(data)
// })