export const commands = `
 Просто нажми на любую из этих команд, отправь их вручную или выбери из списка доступных команд в специальном меню.
  <b>Команды:</b>
  /start   -   Приветствие
  /help   -   Список команд
  /info   -   о боте
  /menu   -   вызов клавиатуры
  /users   -   список юзеров
  /game   -   игра "монетка
  /stats   -   статистика игры
  /bank   -   курс валют
  /random   -   случайные ответы
  /special   -   специальные возможности
`;

export const users = {
    user_1: `🚹 <a href="https://t.me/feden2906"> +380 97 632 28 66 </a>
<b>Maksym</b>
<b>feden2906</b>`,
    user_2: `🚺 <a href="https://t.me/Viktoriia_Krat"> +380 66 405 27 62 </a>
<b>Viktoria</b>
<b>Viktoriia_Krat</b>`,
    user_3: `🚺 <a href="https://t.me/Duimovochka_nata"> +380 66 405 27 62 </a>
<b>Nataliia</b>
<b>Duimovochka_nata</b>`
};

export const randomCommand = `
<b>Шар предсказаний</b>
<i>(случайным образом выдаёт до 3-х вариантов ответа)</i>`

export const infoCommand = `
Это тестовый БОТ для проверки функционала "telegraf"`

export const gameCommand = `
<b>Я подброшу монету, а ты отгадай:</b>
<i>у тебя 1 попытка, но ты всегда можешь перезапустить игру</i>`

export const moneyTrueWin = `
Выпал <i>Орёл</i>
<b>😊 Поздравляю, ты угадал 😊</b>`

export const moneyTrueLose = `
Выпала <i>Решка</i>
<b>🙁 К сожалению ты не угадал 🙁</b>`

export const moneyFalseWin = `
Выпала <i>Решка</i>
<b>😊 Поздравляю, ты угадал 😊</b>`

export const moneyFalseLose = `
Выпал <i>Орёл</i>
<b>🙁 К сожалению ты не угадал 🙁</b>`
