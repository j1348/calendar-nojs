const ejs = require('ejs');
const fs = require('fs');
const templateString = fs.readFileSync('./templates/main.ejs', 'utf-8');
const minify = require('html-minifier').minify;

const data = require('./fake-data').default;
const html = ejs.render(templateString, data);
const outputHTML = minify(html, { debug: true });
fs.writeFileSync("./output.html", outputHTML, 'utf8');
