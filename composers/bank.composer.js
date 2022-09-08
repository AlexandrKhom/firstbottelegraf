import { Composer, Markup } from 'telegraf';
import cc from 'currency-codes';
import axios from 'axios';

const composer = new Composer();

export const bankComposer = composer.command('bank', async (ctx) => {
    try {
        await ctx.replyWithHTML('<b>Курс валют:</b>',
            Markup.inlineKeyboard([
                [Markup.button.callback('USD 🇺🇸', 'USD'),
                    Markup.button.callback('EUR 🇪🇺', 'EUR')],
                [Markup.button.callback('PLN 🇵🇱', 'PLN')],
            ]));
    } catch (e) {
        console.error(e);
    }
})

function getMoney(name){
    composer.action(name, async (ctx) => {
            const clientCurrCode = ctx.update.callback_query.data;
            const currency = cc.code(clientCurrCode)
            if(!currency) {
                return ctx.reply('not money')
            }
            try {
                const result = await axios.get('https://api.monobank.ua/bank/currency');
                const foundCurr = result.data.find((el) => {
                    return el.currencyCodeA.toString() === currency.number;
                })

                if(!foundCurr.rateBuy || !foundCurr.rateSell) {
                    return ctx.reply('monoBank... retry after 1 hour')
                }

                return ctx.replyWithMarkdown(`
                *Выбрано: 1 ${currency.code} за UAH*
                Покупка: ${foundCurr.rateBuy}
                Продажа: ${foundCurr.rateSell}
                `)
            } catch (e) {
                console.error(e.message);
                return ctx.reply('monoBank... too many requests', e.message)
            }
        }
    )
}

getMoney('USD');
getMoney('EUR');
getMoney('PLN');