import { Composer } from "telegraf";

const composer = new Composer();

export const helpComposer = composer.help((ctx) => ctx.replyWithHTML(ctx.i18n.t(`command`)));