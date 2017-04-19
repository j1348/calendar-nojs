const moment = require('moment');
moment.locale('fr');

function getMonthDateRange(year, month) {
    var start = moment([year, month - 1]);

    return {
        start,
        end: moment(start).endOf('month')
    };
}

exports.getMonthContext = function(year, nMonth) {
    const range = getMonthDateRange(year, nMonth);
    const monthTitle = range.start.format('MMMM YYYY');
    const monthId = "m" + range.start.format('MM');
    const month = range.start.month();

    range.start = range.start.add(-range.start.weekday(), 'days');
    range.end = range.end.add(6 - range.end.weekday(), 'days');

    const nDays = (range.end.diff(range.start, 'days')+1);
    const nWeeks = nDays / 7;
    const weekdays = moment.weekdaysMin();
    const firstDayOfWeek = moment().localeData().firstDayOfWeek();

    return {
        nDays,
        nWeeks,
        range,
        weekdays,
        firstDayOfWeek,
        monthTitle,
        monthId,
        month,
    };
}
