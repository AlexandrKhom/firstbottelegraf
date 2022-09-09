import { Composer } from "telegraf";
import { commands } from '../const.js';

const composer = new Composer();

export const helpComposer = composer.help((ctx) => ctx.replyWithHTML(commands));