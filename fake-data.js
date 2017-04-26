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
            name: 'PPPPPPP du Bord - XXX du Petit NNN',
            description: 'RDV à 8h',
            date: moment('2017/04/08', 'YYYY/MM/DD'),
            type: 'category1',
            id: 'event1',
        }, {
            name: 'PPPPPPP du Bord - AAAAA',
            description: 'RDV à 8h',
            date: moment('2017/04/23', 'YYYY/MM/DD'),
            type: 'category1',
            id: 'event11',
        }, {
            name: 'PPPPPPP technique PN2',
            description: 'RDV à 8:15 - départ bateau à 8:30',
            date: moment('2017/05/15', 'YYYY/MM/DD'),
            type: 'category2',
            id: 'event2',
        }, {
            name: 'PPPPPPP exploration N1',
            description: "RDV à 8:45 - départ bateau à 9:00",
            date: moment('2017/05/16', 'YYYY/MM/DD'),
            type: 'category1',
            id: 'event3',
        }
    ],
    months,
};
