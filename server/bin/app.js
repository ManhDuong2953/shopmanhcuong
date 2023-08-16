// phần import module
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
// const session = require('express-session');
// const cookieSession = require('cookie-session');
var logger = require('morgan');
const bodyParser = require('body-parser');
// const jwt = require('jsonwebtoken');
const https = require('https');
const fs = require('fs');
const cors = require('cors');
require("dotenv").config()

import RouterMains from '../routes/router';

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// morgan setup 
app.use(logger('dev'));
// xử lý file, json, url, cookies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

//server
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
// app.get('/login', authorizationUser, function (req, res) {
// 	res.cookie('token', accessToken, { maxAge: 3600000, httpOnly: true, secure: true });
// })
// //client
// fetch('http://localhost:8000/login',
// 	{
// 		method: "GET",
// 		credentials: 'include'
//     })



//Các định tuyến
RouterMains(app)


const port = process.env.PORT || 443; // Cổng cho HTTPS là 443
app.listen(port, (req, res) => {
	console.log(`Máy chủ đang lắng nghe tại https://localhost:${port}`);
})










// // phần HTTPS
// var path = require('path')
// // Đọc tệp chứng chỉ SSL tự ký
// const privateKey = fs.readFileSync(path.join(__dirname + "\\private.key"));
// const certificate = fs.readFileSync(path.join(__dirname + '\\certificate.crt'));
// const credentials = { key: privateKey, cert: certificate };
// // Tạo máy chủ HTTPS
// const httpsServer = https.createServer(credentials, app);
// const port = process.env.PORT || 443; // Cổng cho HTTPS là 443
// httpsServer.listen(port, () => {
// 	console.log(`Máy chủ đang lắng nghe tại https://localhost:${port}`);
// });