const Telegraf = require('telegraf');

require('dotenv').config();

const { isWorkDay } = require('./utils');
const getRunCron = require('./cron');

const runScript = async(ctx, message, date) => {
    getRunCron(date, async() => {
        const isTrue = await isWorkDay();
        if (isTrue) {
            return ctx.reply(message);

        }
        return () => {};
    })
};

const bot = new Telegraf(process.env.TELEGRAM_KEY);

bot.start((ctx) => {
    // ctx.reply('Здарово-ствуй я вроде как бот, и вроде как буду оповещять о том что у вас тут душно (а тут реально душно, ага)')

    runScript(ctx, 'Надо проветрить!!!', '45 11 * * *');
    runScript(ctx, 'Надо проветрить!!!', '45 14 * * *');
    runScript(ctx, 'Надо проветрить!!!', '45 16 * * *')

});

bot.launch();
