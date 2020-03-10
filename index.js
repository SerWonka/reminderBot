const Telegraf = require('telegraf');

const bot = new Telegraf(process.env.TELEGRAM_KEY); 


bot.start((ctx) => {
    ctx.reply('Здарово-ствуй я вроде как бот, и вроде как буду оповещять о том что у вас тут душно (а тут реально душо, ага)')
    const cron = require('node-cron');

    cron.schedule('18 12 * * *', () => {
        ctx.reply('Надо проветрить!!!');
    });

    cron.schedule('17 12 * * *', () => {
        ctx.reply('Надо проветрить!!!');
    });

    cron.schedule('16 12 * * *', () => {
        ctx.reply('Надо проветрить!!!');
    });
})
bot.launch()
