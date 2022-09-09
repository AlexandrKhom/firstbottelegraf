import { Composer, Markup } from 'telegraf';
import { randomCommand } from '../const.js';

const composer = new Composer();

export const randomComposer = composer.command('random', async (ctx) => {
    try {
        await ctx.replyWithHTML(randomCommand,
            Markup.inlineKeyboard([
                Markup.button.callback('Да', 'yes', Math.random() > 0.5),
                Markup.button.callback('Возможно', 'maybe', Math.random() > 0.5),
                Markup.button.callback('Нет', 'no', Math.random() > 0.5),
            ]),
        );
    } catch (e) {
        console.log(e)
        await ctx.reply(e.message)
    }
});


composer.action('maybe', async (ctx, next) => {
    ctx.answerCbQuery(`
Oh, ${ctx.match[0]}! Great choice`);
    return ctx.reply('⁉').then(() => next());
});

composer.action('yes', async (ctx, next) => {
    ctx.answerCbQuery(`
Oh, ${ctx.match[0]}! Great choice`);
    return ctx.reply('❗').then(() => next());
});

composer.action('no', async (ctx, next) => {
    ctx.answerCbQuery(`
Oh, ${ctx.match[0]}! Great choice`);
    return ctx.reply('❓').then(() => next());
});