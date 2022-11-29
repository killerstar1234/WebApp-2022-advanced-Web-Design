const axios = require('axios');

exports.view = (req, res) => {
    axios.get(`http://www.mitch.redhawks.us/?all=true`).then(result => {
        const data = result.data;
        return res.render('adminView', {
            data
        });
    })
}

exports.givePerms = (req, res) => {

    const email = req.query.arr;

    

    return res.json({"test": true})
}