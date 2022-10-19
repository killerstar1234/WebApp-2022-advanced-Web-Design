const axios = require('axios');
const cookieParser = require('cookie-parser');

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

    const email = req.cookies['email'];

    console.log(email);

    res.status(200).render('edit');

}