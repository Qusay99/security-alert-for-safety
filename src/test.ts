import { TelegramBotForSafetyMania } from './telegram_bot.ts';
import { NearestCityCalculator } from './distance_calculator.ts';

const userGeo = {
    latitude: 51.919477, 
    longitude: 11.895740
}

const name_of_person = ""
const custom_message = "CUSTOM MESSAGE"
var city =  await NearestCityCalculator.findNearestCity(userGeo)
TelegramBotForSafetyMania.startBot(userGeo.latitude, userGeo.longitude, name_of_person, city)