const cron = require('node-cron');

/**
 * Create cron job with params
 * @param {string} date - *(second - optional) *(minute) *(hour) *(day of month) *(month) *(day of week)
 * @param {function} callback - run params function
 * @see https://www.npmjs.com/package/node-cron
 */
const getRunCron = (date, callback) => {
    cron.schedule(date, () => {
        callback();
    }, {
        timezone: 'Europe/Kiev'
    });
};

module.exports = getRunCron;

