import { TelegramBotForSafetyMania } from './telegram_bot.ts';
import { NearestCityCalculator } from './distance_calculator.ts';

const userGeo = {
    latitude: 49.488888, 
    longitude: 8.469167
}

const name_of_person = "Qusay-Test"
const custom_message = "CUSTOM MESSAGE"
// var city =  await NearestCityCalculator.findNearestCity(userGeo)
TelegramBotForSafetyMania.startBot(userGeo.latitude, userGeo.longitude, name_of_person, "Berlin")