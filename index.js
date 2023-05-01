const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


app.get('/', (req, res)=>{
    res.send('my own server')
})

app.listen(port, ()=>{
    console.log(`my api is running on port ${port}`);
})