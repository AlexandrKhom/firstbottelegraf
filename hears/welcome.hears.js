import { Composer } from 'telegraf';

const composer = new Composer();

export const welcomeHear = composer.hears(/(привет)/i, async (ctx) => ctx.reply('Привет! Как дела?'));
composer.hears(/(у тебя как)/i, async (ctx) => ctx.reply('У меня всё отлично'));
composer.hears(/(макс)/i, async (ctx) => ctx.reply('pedr!'));
composer.hears("🔍 Поиск", ctx => ctx.reply("загугли..."));