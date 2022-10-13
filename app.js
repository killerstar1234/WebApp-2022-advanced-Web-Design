const express = require('express');
const app = express();



app.set('view engine', 'hbs');

app.use(express.static('./public'))
app.use('/js', express.static('./public'));

app.use('/', require('./routes/pages'))



app.listen(3000, () => {
    console.log("Server Running on Port 3000...")
})