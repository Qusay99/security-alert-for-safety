import { TelegramBot, UpdateType } from "https://raw.githubusercontent.com/michael-spengler/deno-telegram-bot-api/master/mod.ts"
import "https://deno.land/x/dot_env@0.2.0/load.ts"
import { Request } from 'https://deno.land/x/request@1.3.2/mod.ts'

const TOKEN = Deno.env.get("TOKEN");
if (!TOKEN) throw new Error("Bot token is not provided");
const bot = new TelegramBot(TOKEN);
var data_json = new String()
data_json = await Request.get('https://raw.githubusercontent.com/Qusay99/security-alert-for-safety/Telegram-Bot-Developement/location_to_chat_IDs.json')

bot.on(UpdateType.Message, async (message: any) => {

    const text = message.message.text || "I can't hear you";
    const location = "Hamburg"
    var chatID = ""
    
    for (let prop in data_json) {
        let entry = data_json[prop]
        if (Object.values(entry).includes(location)) {
            chatID = Object.values(entry)[2]
        }
    }

    await bot.sendMessage({ chat_id: chatID, text: `Bot sagt: ${text}` })

});

bot.run({
    polling: true,
});