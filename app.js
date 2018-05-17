const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

//Init MiddleWare
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname,'public')));

app.use((req,res,next)=>{
	res.locals.errors = null;
	next();
});




//Pages

//Home
app.get('/', (req,res)=>{
	res.render('index');
});




 //Start the server
app.listen(8020, ()=>{
	console.log('Server Started on 8020')
});
