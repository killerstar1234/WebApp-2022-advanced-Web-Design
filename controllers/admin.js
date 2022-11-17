const axios = require('axios');

exports.view = (req, res) => {
    axios.get(`http://www.mitch.redhawks.us/?all=true`).then(result => {
        const data = result.data;
        console.log(data);
        return res.json(data);
    })
}