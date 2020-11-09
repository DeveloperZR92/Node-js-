const express = require('express');
const app = express();
const mongoose = require('mongoose');
const postRouter = require('./routes/posts');
//const bodyParser = require("body-parser");


// portas
const port = process.env.PORT || 5000;



app.use(express.json());
//app.use(bodyParser.json());
app.use('/post', postRouter);


// mongodb prisijungimas
mongoose
.connect('mongodb://localhost:27017/crud_apis', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
 })
 .then((db) => console.log('db is connected'))
 .catch((err) => console.log(err));

  


// get uzklausa, per narsykle siunciam uzklausa ir gaunam atsakyma res.send
app.get('/',  ( req, res)  => {
    res.send('Hello');
});

app.listen(port, () => { console.log(`Example app listening at http://localhost:${port}`)});



