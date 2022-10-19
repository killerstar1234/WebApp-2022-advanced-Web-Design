const axios = require('axios');


exports.quick = (req, res) => {

    const subject = req.query.subject;

    axios.get(`http://www.mitch.redhawks.us/?subject=${subject}`).then(results => {


        if(results.data) {
            res.json(results.data);
        } else {
            res.json(false)
        }

    }).catch(err => {
        if(err) {
            console.log(err);
        }
    })

}

exports.edit = (req, res) => {

    // code...

}