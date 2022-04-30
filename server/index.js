const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('hello NodeJs');
})
app.listen(4000, () => console.log('4000번 포트 대기'));