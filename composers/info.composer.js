import { Composer } from "telegraf";

const composer = new Composer();

const AnimationUrl3 = 'https://media.giphy.com/media/ZqOGQO6ZMSqUYDHj0T/giphy.gif';

export const infoComposer = composer.command('info', async (ctx) => {
    await ctx.reply(ctx.i18n.t('infoCommand'))
    await ctx.replyWithAnimation(AnimationUrl3)
})