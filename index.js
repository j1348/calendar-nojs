const ejs = require('ejs');
const fs = require('fs');
const templateString = fs.readFileSync('./templates/main.ejs', 'utf-8');
var minify = require('html-minifier').minify;
const getMonthContext = require('./src/month').getMonthContext;
const moment = require('moment');

var data = {
	events: [{
			name: 'event 1',
			date: moment('2017/04/08', 'YYYY/MM/DD'),
			type: 'category1',
		}, {
			name: 'event 1',
			date: moment('2017/04/15', 'YYYY/MM/DD'),
			type: 'category2',
		}
	],
	context: getMonthContext(2017, 4)
};



var html = ejs.render(templateString, data);

var outputHTML = minify(html, { debug: true });

//console.log(outputHTML);

fs.writeFileSync("./output.html", outputHTML, 'utf8');
