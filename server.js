var express = require('express');
var mysql = require('mysql');
var handleBars = require('express-handlebars');
var 

var PORT = process.env.NODE_ENV || 3007;
app.engine('handleBars', express-handlebars({roomTempLayout:});
app.set('view engine', 'handlebars');

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3007,
  user: 'root',
  database: 'room_temp_db'
});