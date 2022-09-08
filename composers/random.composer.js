import { Composer, Markup } from 'telegraf';

const composer = new Composer();

export const randomComposer = composer.command('random', async (ctx) => {
    try {
        await ctx.replyWithHTML(ctx.i18n.t('randomCommand', {ctx}),
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
    ctx.answerCbQuery(ctx.i18n.t('randomQuery', {ctx}));
    return ctx.reply('⁉').then(() => next());
});

composer.action('yes', async (ctx, next) => {
    ctx.answerCbQuery(ctx.i18n.t('randomQuery', {ctx}));
    return ctx.reply('❗').then(() => next());
});

composer.action('no', async (ctx, next) => {
    ctx.answerCbQuery(ctx.i18n.t('randomQuery', {ctx}));
    return ctx.reply('❓').then(() => next());
});