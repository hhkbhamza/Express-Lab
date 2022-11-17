const express = require("express");
const app = express();

const fs = require("fs");

app.engine("temp", (filePath, options, callback) => {
    fs.readFile(filePath, (err, content) => {
      if (err) return callback(err);
      const rendered = content
        .toString()
        .replace("#message#", "<h1>" + options.message + "</h1>")
        .replace("#message1#", "<p1>" + options.message1 + "</p1>")
      return callback(null, rendered);
    });
  });


app.set('views', './views');
app.set('view engine', 'temp');

app.get('/', (req, res) => {
    res.render('template', {
        message: "Type in "
    });
});

app.get('/1', (req, res) => {
    res.render('template', {
        message: "Hi"
    });
});

app.get('/2', (req, res) => {
    res.render('template1', {
        message: "Hi from 2",
        message1: "Testing"
    });
});

app.get('/3', (req, res) => {
    res.render('template', {
        message: "Hi from 3"
    });
});

app.get('/4', (req, res) => {
    res.render('template1', {
        message: "Hi from 4",
        message1: "Bye from 3"
    });
});

app.get('/5', (req, res) => {
    res.render('template1', {
        message: "Hi from 5",
        message1: "Bye from 4"
    });
});

app.get('/6', (req, res) => {
    res.render('template', {
        message: "Hi from 6"
    });
});

app.get('/7', (req, res) => {
    res.render('template1', {
        message: "Hi from 7",
        message1: "Bye from 6"
    });
});

app.get('/8', (req, res) => {
    res.render('template1', {
        message: "Hi from 8",
        message1: "Bye from 7"
    });
});

app.get('/9', (req, res) => {
    res.render('template', {
        message: "Bye from 9"
    });
});

app.get('/10', (req, res) => {
    res.render('template1', {
        message: "Hi from 10",
        message1: "Bye from 9"
    });
});

app.listen(3000, () => {
    console.log('Listening');
});