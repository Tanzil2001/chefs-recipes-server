const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const data = require('./chefs.json');


app.use(cors());

app.get('/', (req, res)=>{
    res.send('my own server')
})

app.get('/chefs', (req, res)=>{
    res.send(data)
})


app.listen(port, ()=>{
    console.log(`my api is running on port ${port}`);
})