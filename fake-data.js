const getMonthContext = require('./src/month').getMonthContext;
const moment = require('moment');

var months = [];

for(var y=2017; y<=2017; y++) {
    for (var i=1; i<=5; i++) {
        months.push(getMonthContext(y, i));
    }
}

exports.default = {
    events: [{
            name: 'event 1',
            description: 'This is a damn good event',
            date: moment('2017/04/08', 'YYYY/MM/DD'),
            type: 'category1',
            id: 'event1',
        }, {
            name: 'event 2',
            description: 'Testing the display event',
            date: moment('2017/05/15', 'YYYY/MM/DD'),
            type: 'category2',
            id: 'event2',
        }, {
            name: 'XXXXXXX dkzoekdokzeod',
            description: "TtTTTTTt kc osdkocosdkcok sodco ",
            date: moment('2017/05/16', 'YYYY/MM/DD'),
            type: 'category1',
            id: 'event3',
        }
    ],
    months,
};
