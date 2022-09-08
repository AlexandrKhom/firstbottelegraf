import { Composer } from 'telegraf';

const composer = new Composer();

export const calcComposer = composer.command('calc', async (ctx) => {
    try {
        await ctx.scene.enter('calc')
    } catch (e) {
        console.error('cant enter calc scene', e)
    }
})