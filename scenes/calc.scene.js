import { Markup, Scenes } from 'telegraf';

function doSome(ctx, msg){
    return ctx.replyWithHTML(msg,
        Markup.inlineKeyboard([
            [Markup.button.callback('1', '1'), Markup.button.callback('2', '2'), Markup.button.callback('3', '3')],
            [Markup.button.callback('4', '4'), Markup.button.callback('5', '5'), Markup.button.callback('6', '6')],
            [Markup.button.callback('7', '7'), Markup.button.callback('8', '8'), Markup.button.callback('9', '9')],
            [Markup.button.callback('0', '0')],
        ]))
}

export const calcScene = new Scenes.WizardScene(
    'calc',
    async (ctx) => {
        try {
            await doSome(ctx, 'Введите первое число')
            return ctx.wizard.next()
        } catch {
        }
    },
    async (ctx) => {
        try {
            const a = +ctx.update.callback_query.data;
            if(isNaN(a)) return
            ctx.session.a = a

            await ctx.replyWithHTML(`Введите....`,
                Markup.inlineKeyboard([
                    [Markup.button.callback('+', '+'), Markup.button.callback('-', '-')],
                    [Markup.button.callback('*', '*'), Markup.button.callback('/', '/')],
                ]))
            return ctx.wizard.next()
        } catch (e) {
            console.log(e)
        }
    },
    async (ctx) => {
        try {
            const some = ctx.update.callback_query.data;
            await ctx.answerCbQuery()
            ctx.session.some = some

            await doSome(ctx, `Введите второе число`)
            return ctx.wizard.next()
        } catch (e) {
            console.log(e)
        }
    },
    async (ctx) => {
        try {
            const b = +ctx.update.callback_query.data;
            if(isNaN(b)) return

            const { a } = ctx.session
            const { some } = ctx.session

            let result
            switch (some) {
                case '+':
                    result = a + b
                    break
                case '-':
                    result = a - b
                    break
                case '*':
                    result = a * b
                    break
                case '/':
                    result = a / b
                    break
                default:
                    return
            }

            await ctx.replyWithHTML(`Результат: ${a} ${some} ${b} = ${result}`)
            return ctx.scene.leave()
        } catch (e) {
            console.log(e)
        }
    }
)