import { Composer } from "telegraf";
import { infoCommand } from '../const.js';

const composer = new Composer();

const AnimationUrl3 = 'https://media.giphy.com/media/ZqOGQO6ZMSqUYDHj0T/giphy.gif';

export const infoComposer = composer.command('info', async (ctx) => {
    await ctx.reply(infoCommand)
    await ctx.replyWithAnimation(AnimationUrl3)
})