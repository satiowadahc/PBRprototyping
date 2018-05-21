/*
 Project: PBR Test Site
 Author: Chad A. Woitas
 Repo: githhub.com/satiowadahc/PBRprototyping

 Current TODO List:
	- Photo Galleries - nanogallery
	- Fix CSS 
		Images
		Nav
	- Add content to Pages
		About
		Automotive
		Live Auctions
		Upcoming Auctions
		Buyer
		Sellers
		Store
		Contact
	- Member list
		- DB
	- Encryption - Cert Bot 
*/


 // load data
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

 // Initialize MiddleWare
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname,'public')));

app.use((req,res,next)=>{
	res.locals.errors = null;
	next();
});


 // Pages
 
 // Home
app.get('/', (req,res)=>{
	res.render('index');
});

app.get('/about', (req,res)=>{
	res.render('about');
});

app.get('/automotive', (req,res)=>{
	res.render('automotive');
});

app.get('/liveauctions', (req,res)=>{
	res.render('liveauction');
});

app.get('/upcoming', (req,res)=>{
	res.render('upcoming');
});

app.get('/buyer', (req,res)=>{
	res.render('buyers');
});

app.get('/sellers', (req,res)=>{
	res.render('sellers');
});

app.get('/store', (req,res)=>{
	res.render('store');
});

app.get('/contact', (req,res)=>{
	res.render('contact');
});

 // Start the server
app.listen(8020, ()=>{
	console.log('Server Started on 8020')
});
