//FIXME refactoring

const isToday = require('date-fns/isToday');
const isWeekend = require('date-fns/isWeekend');

const mockData = require('../mock-data');

const getHolidays = () => {
    //FIXME changed to real request https://calendarific.com/api-documentation
    return new Promise((res) => {
        setTimeout(() => {
            res(mockData.response.holidays);
        }, 1000)
    })
};


const isWorkDay = async () => {
  const holidayArr = await getHolidays();

  const todayIsHoliday = holidayArr.some((e) => {
      const date = e.date.iso;
      return isToday(new Date(date));
  });

  const todayIsWeekend = isWeekend(new Date());

  return !(todayIsHoliday || todayIsWeekend);
};



module.exports = {
    getHolidays,
    isWorkDay
};
