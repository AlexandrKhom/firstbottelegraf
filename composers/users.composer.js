import { Composer, Markup } from 'telegraf';
import { users } from '../const.js';

const composer = new Composer();

export const usersComposer = composer.command('users', async (ctx) => {
    try {
        await ctx.replyWithHTML('<b>Список участников чата</b>', Markup.inlineKeyboard([
            [Markup.button.callback('user_1', 'btn_1')],
            [Markup.button.callback('user_2', 'btn_2')],
            [Markup.button.callback('user3', 'btn_3')],
        ]))
    } catch (e) {
        console.error(e);
    }
})

function addActionBot(name, src, text){
    composer.action(name, async (ctx) => {
        try {
            await ctx.answerCbQuery()

            if(src !== false) {
                await ctx.replyWithPhoto({
                    source: src
                })
            }

            await ctx.replyWithHTML(text, {
                disable_web_page_preview: true
            })
        } catch (e) {
            console.error(e);
        }
    })
}

addActionBot('btn_1', './images/users/fedenko.jpg', users.user_1)
addActionBot('btn_2', './images/users/krat.jpg', users.user_2)
addActionBot('btn_3', './images/users/rybalka.jpg', users.user_3)