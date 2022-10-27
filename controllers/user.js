const axios = require('axios');
const cookieParser = require('cookie-parser');

exports.quick = (req, res) => {

    const subject = req.query.subject;
    console.log(subject);

    axios.get(`http://www.mitch.redhawks.us/?subject=${subject}`).then(results => {


        if(results.data) {
            return res.json(results.data);
        } else {
            return res.json(false)
        }

    }).catch(err => {
        if(err) {
            return res.status(400).render('quick');
            console.log(err);
        }
    })

}