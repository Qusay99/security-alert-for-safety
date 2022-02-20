// import { DistanceCalculator } from 'https://deno.land/x/distancecalculator/distance-calculator.ts';
// import { TelegramBot, UpdateType } from "https://deno.land/x/telegram_chatbot/mod.ts"
import { TelegramBot } from "https://deno.land/x/telegram_chatbot@v1.0.0/mod.ts"
// import "https://deno.land/x/dot_env@0.2.0/load.ts"
// import { Request } from 'https://deno.land/x/request@1.3.2/mod.ts'


export class TelegramBotForSafetyMania {

    public static initializeBot() {
    // let TOKEN = Deno.env.get("TOKEN");
        const TOKEN = "5084168171:AAGroWfPp-j86PYHEXDl4Fspwk9-Ngszm0E"
        if (!TOKEN) throw new Error("Bot token is not provided");
        let bot = new TelegramBot(TOKEN);
        return bot;
    }

    // public static async getJSON() {
    //     let data_json = new String();    
    //     // data_json = await Request.get('https://raw.githubusercontent.com/Qusay99/security-alert-for-safety/Telegram-Bot-Developement/location_to_chat_IDs.json')   
    //     data_json = await Request.get('https://raw.githubusercontent.com/Qusay99/security-alert-for-safety/main/location_to_chat_IDs.json')   
    //     return data_json
    // }

    // public static async startBot(latitude: any, longitude: any, name_of_person="", location: any) {
    public static startBot(data_json: any ,latitude: any, longitude: any, name_of_person: string, location: any) {
        console.log("entered the bot method")
        let bot = this.initializeBot()
        let chatID: any;
    
        // let data_json = await this.getJSON().then((response) => {return response});
        let maps_link = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`
        let emergency_message;
        if (name_of_person !== "") {
            emergency_message = `\n\n[ACHTUNG GEFAHR]\n${name_of_person} hat auf den Notfall-Knopf gedrückt.\n \nDie Person befindet sich bei folgenden Koordinaten \nLängengrad: ${longitude} / Breitengrad: ${latitude}
                                    \nSiehe auf Maps:\n` + maps_link;
        }
        else
        {
            emergency_message = `\n\n[ACHTUNG GEFAHR]\nEine Person hat auf den Notfall-Knopf gedrückt.\n \nDie Person befindet sich bei folgenden Koordinaten \nLängengrad: ${longitude} / Breitengrad: ${latitude}
                                \nSiehe auf Maps:\n` + maps_link;
        }
        
        for (let prop in data_json) {
            let entry = data_json[prop]
            // console.log(entry)
            if (Object.values(entry).includes(location)) {
                chatID = Object.values(entry)[2]
                // console.log("location was found")
            }
            // else{
            //     console.log("no chatID was found")
            // }
        }

        bot.sendMessage({chat_id: chatID, text: `${emergency_message} \n\n(Disclaimer: This is an automatically generated Test-Message by SafetyBot ${location})\n\nFor more information visit https://github.com/Qusay99/security-alert-for-safety!`})

    bot.run({
        polling: true,
    });
    }
}