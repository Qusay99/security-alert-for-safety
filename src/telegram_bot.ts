import { DistanceCalculator } from 'https://deno.land/x/distancecalculator/distance-calculator.ts';
import { TelegramBot, UpdateType } from "https://raw.githubusercontent.com/michael-spengler/deno-telegram-bot-api/master/mod.ts"
import "https://deno.land/x/dot_env@0.2.0/load.ts"
import { Request } from 'https://deno.land/x/request@1.3.2/mod.ts'

const TOKEN = Deno.env.get("TOKEN");
if (!TOKEN) throw new Error("Bot token is not provided");
const bot = new TelegramBot(TOKEN);
var data_json = new String();
data_json = await Request.get('https://raw.githubusercontent.com/Qusay99/security-alert-for-safety/Telegram-Bot-Developement/location_to_chat_IDs.json')

bot.on(UpdateType.Message, async (message: any) => {

    var location = "Mannheim"
    var chatID = ""
    var longitude = 69
    var latitude = 42
    var name_of_person = "Maximilian von Mustermann"
    var custom_message = "[[Custom-Message by User]]"
    var emergency_message = `${custom_message} \n\n[ACHTUNG GEFAHR]\nEine Person hat auf den Notfall-Knopf gedrückt.\n \nDie Person befindet sich bei folgenden Koordinaten \nLängengrad: ${longitude} / Breitengrad: ${latitude}`

    if (name_of_person !== "") {
        var emergency_message = `${custom_message} \n\n[ACHTUNG GEFAHR]\n${name_of_person} hat auf den Notfall-Knopf gedrückt.\n \nDie Person befindet sich bei folgenden Koordinaten \nLängengrad: ${longitude} / Breitengrad: ${latitude}`
    }
    for (let prop in data_json) {
        let entry = data_json[prop]
        if (Object.values(entry).includes(location)) {
            chatID = Object.values(entry)[2]
        }
    }

    await bot.sendMessage({chat_id: chatID, text: `${emergency_message} \n\n\n\n(Disclaimer: This is an automatically generated Test-Message by SafetyBot ${location})\n\nFor more information visit https://github.com/Qusay99/security-alert-for-safety!`})

});

bot.run({
    polling: true,
});