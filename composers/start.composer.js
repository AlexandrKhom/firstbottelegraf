import { Composer } from "telegraf";

const composer = new Composer();

export const startComposer = composer.start(async (ctx) => {
    await ctx.reply(ctx.i18n.t('start', {ctx}));
    await ctx.replyWithAnimation('https://cdn.tlgrm.app/stickers/e7b/03b/e7b03b2f-c17b-4ccd-8d81-18a85eb7830f/192/5.webp');
});
