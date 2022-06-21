const express = require('express');
const hbs = require('hbs');
const compileSass = require('express-compile-sass');
const root = process.cwd();

const app = express();
const PORT = 3000;


app.set('view engine', 'hbs');
app.set('views', 'src')
hbs.registerPartials(  './src/components/')

app.get('/', function (request, response) {
  response.render('./pages/index', {
    id: 'root',
  })
});

app.get('/login.hbs', function (request, response) {
  response.render('./pages/login')
});

app.get('/register.hbs', function (request, response) {
  response.render('./pages/register')
});

app.get('/settings.hbs', function (request, response) {
  response.render('./pages/settings')
});

app.get('/friends.hbs', function (request, response) {
  response.render('./pages/friends')
});

app.get('/chat.hbs', function (request, response) {
  response.render('./pages/chat')
});

app.get('/404.hbs', function (request, response) {
  response.render('./pages/404')
});

app.get('/500.hbs', function (request, response) {
  response.render('./pages/500')
});

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});

app.use(compileSass({
  root: root,
  sourceMap: true, // Includes Base64 encoded source maps in output css
  sourceComments: true, // Includes source comments in output css
  watchFiles: true, // Watches sass files and updates mtime on main files for each change
  logToConsole: false // If true, will log to console.error on errors
}));
app.use(express.static('./'));
