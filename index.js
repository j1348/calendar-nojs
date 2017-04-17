const ejs = require('ejs');
const fs = require('fs');
const templateString = fs.readFileSync('./templates/main.ejs', 'utf-8');
var minify = require('html-minifier').minify;
const getMonthContext = require('./src/month').getMonthContext;
const moment = require('moment');

var months = [];

for(var y=2016; y<=2017; y++) {
    for (var i=1; i<=12; i++) {
        months.push(getMonthContext(y, i));
    }
}

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
	months,
};



var html = ejs.render(templateString, data);

var outputHTML = minify(html, { debug: true });

//console.log(outputHTML);

fs.writeFileSync("./output.html", outputHTML, 'utf8');
