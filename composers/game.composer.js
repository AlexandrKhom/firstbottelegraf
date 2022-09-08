import { Composer, Markup } from 'telegraf';

const composer = new Composer();

let randomNumber;
const result = {
    win: 0,
    lose: 0
}

export const gameComposer = composer.command(['game', 'again'], async (ctx) => {
    try {
        await ctx.replyWithHTML(`<b>Я подброшу монету, а ты отгадай:</b>
<i>у тебя 1 попытка, но ты всегда можешь перезапустить игру</i>`,
            Markup.inlineKeyboard([
                [Markup.button.callback('Орёл', '1'),
                    Markup.button.callback('Решка', '0')],
            ]));
        randomNumber = Math.round(Math.random());
        console.log(randomNumber)

    } catch (e) {
        console.error(e);
    }
})

export const statsComposer = composer.command('stats', async (ctx) => {
    try {
        console.log(result)
        await ctx.replyWithHTML(`<b>Статистика: </b>
      <b>Побед = ${result.win}</b>
      <b>Поражений = ${result.lose}</b>`)

    } catch (e) {
        console.error(e);
    }
})

composer.action('1', async (ctx, next) => {
    const data = ctx.update.callback_query.data;
    await ctx.answerCbQuery()
    if(randomNumber == data) {
        result.win++;
        randomNumber = '';
        return ctx.replyWithHTML(ctx.i18n.t('moneyTrueWin'))
            .then(() => next());
    } else {
        result.lose++;
        randomNumber = '';
        return ctx.replyWithHTML(ctx.i18n.t('moneyTrueLose'))
            .then(() => next());
    }
});

composer.action('0', async (ctx, next) => {
    const data = ctx.update.callback_query.data;
    await ctx.answerCbQuery()
    if(randomNumber == data) {
        result.win++;
        randomNumber = '';
        return ctx.replyWithHTML(ctx.i18n.t('moneyFalseWin'))
            .then(() => next());
    } else {
        result.lose++;
        randomNumber = '';
        return ctx.replyWithHTML(ctx.i18n.t('moneyFalseLose'))
            .then(() => next());
    }
});