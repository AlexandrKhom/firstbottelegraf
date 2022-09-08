import { Composer, Markup } from 'telegraf';

const composer = new Composer();

export const menuComposer = composer.command(['menu', 'back'], async ctx => {
    return await ctx.reply(
        "Custom buttons keyboard",
        Markup.keyboard([
            ['/start', '/help', '/info'],
            ['/users', '/bank', '/random'],
            ['/game', '/stats', '/special'],
            ["🔍 Поиск"],
        ])
            .oneTime()
            .resize(),
    );
});