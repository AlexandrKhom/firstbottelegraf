import * as dotenv from 'dotenv';
import { Telegraf, Scenes, session } from 'telegraf';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { users } from './const.js';
import { startComposer } from './composers/start.composer.js';
import { helpComposer } from './composers/help.composer.js';
import { infoComposer } from './composers/info.composer.js';
import { usersComposer } from './composers/users.composer.js';
import { gameComposer } from './composers/game.composer.js';
import { randomComposer } from './composers/random.composer.js';
import { bankComposer } from './composers/bank.composer.js';
import { welcomeHear } from './hears/welcome.hears.js';
import { calcScene } from './scenes/calc.scene.js';
import { calcComposer } from './composers/calc.composer.js';
import { menuComposer } from './composers/menu.composer.js';
import { specialComposer } from './composers/special.composer.js';

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

bot.telegram.setMyCommands([
    { command: 'start', description: 'Приветствие' },
    { command: 'help', description: 'Список команд' },
    { command: 'info', description: 'о боте' },
    { command: 'menu', description: 'вызов клавиатуры' },
    { command: 'users', description: 'список юзеров' },
    { command: 'game', description: 'игра "монетка"' },
    { command: 'stats', description: 'статистика игры' },
    { command: 'bank', description: 'курс валют' },
    { command: 'random', description: 'случайные ответы' },
    { command: 'special', description: 'специальные возможности' },
])

const stage = new Scenes.Stage([calcScene])
bot.use(session())
bot.use(stage.middleware())

bot.use(startComposer);
bot.use(helpComposer);
bot.use(infoComposer);
bot.use(usersComposer);
bot.use(gameComposer);
bot.use(randomComposer);
bot.use(bankComposer);
bot.use(welcomeHear);
bot.use(calcComposer);
bot.use(menuComposer);
bot.use(specialComposer);


bot.launch().then(() => {
    console.log(`BOT started ${__filename}`)
});

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));