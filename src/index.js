const express = require('express');
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));




// routes
app.use(require('./routes/index'));

app.listen(8000);
console.log('Server on port 8000')