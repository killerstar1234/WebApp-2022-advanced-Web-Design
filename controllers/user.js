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
            res.status(400).render('quick');
            console.log(err);
        }
    })

}

exports.edit = (req, res) => {

    const email = req.cookies['email'];

    axios.get(`http://www.mitch.redhawks.us/?email=${email}`).then(results => {
        

        if(results.data) {
            const subject = results.data.profile
            res.status(200).render('edit', {profile: subject});
        } else {
            res.status(200).render('edit', {profile: 'You Have Nothing In Your Profile'})
        }


    

}).catch(err => {
        if(err) {
            res.status(400).render('edit', {message: 'err'});
            console.log(err);
        }
    })

    console.log(email);

    res.status(200).render('edit');
}