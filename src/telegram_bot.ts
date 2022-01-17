import { Bot } from "https://deno.land/x/telegram@v0.1.1/mod.ts";
import "https://deno.land/x/dotenv/load.ts";

const token = Deno.env.get("TOKEN");

console.log(String(token));

const bot = new Bot("5084168171:AAFynbkC-112hpy8hmssBcJONjDsCuMZvHI");

bot.on("text", async (ctx) => {
    const text = ctx.message?.text;

    if (text === "/safety") {
        await ctx.reply("Ich bin online!");
    }

    if (text === "/safetyHelp") {
        await ctx.reply("Ich funktioniere!");
    }
});

bot.launch();