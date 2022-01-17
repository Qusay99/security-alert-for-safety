// import { TelegramBot, UpdateType } from "https://deno.land/x/telegram_bot_api/mod.ts"
import { TelegramBot, UpdateType } from "https://raw.githubusercontent.com/michael-spengler/deno-telegram-bot-api/master/mod.ts"
import "https://deno.land/x/dot_env@0.2.0/load.ts"
// import {get_city_to_id_json} from "./request_module.ts"
import { Request } from 'https://deno.land/x/request@1.3.2/mod.ts'

const TOKEN = Deno.env.get("TOKEN");
if (!TOKEN) throw new Error("Bot token is not provided");
const bot = new TelegramBot(TOKEN);
var data_json = new String()
data_json = await Request.get('https://raw.githubusercontent.com/Qusay99/security-alert-for-safety/main/location_to_chat_IDs.json')

bot.on(UpdateType.Message, async (message: any) => {

    const text = message.message.text || "I can't hear you";
    const location = "Mannheim"
    var chat_ID = data_json
    for (let prop in chat_ID) {
        console.log(chat_ID[prop][0])
    }
    //console.log(data_json)
    //await bot.sendMessage({ chat_id: chatID, text: `Bot sagt: ${text}` })

});

bot.run({
    polling: true,
});