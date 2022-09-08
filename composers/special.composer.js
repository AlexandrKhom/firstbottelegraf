import { Composer, Markup } from 'telegraf';

const composer = new Composer();

export const specialComposer = composer.command("special", ctx => {
    return ctx.reply(
        "Special buttons keyboard",
        Markup.keyboard([
            Markup.button.contactRequest("Send contact"),
            Markup.button.locationRequest("Send location"),
            Markup.button.text("/back"),
        ]).resize(),
    );
});