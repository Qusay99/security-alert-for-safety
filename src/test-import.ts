import { Request } from 'https://deno.land/x/request@1.3.2/mod.ts'
import { DistanceCalculator } from "https://deno.land/x/distancecalculator/distance-calculator.ts"


//define arrays

export class TestClassImport {
    // public static async getCityJSON() {
    //     const x = Request.get('https://raw.githubusercontent.com/Qusay99/security-alert-for-safety/main/location_to_chat_IDs.json');
    //     return x
    // }
    public static  findNearestCity() {
    // public async findNearestCity(userGeo: any) {
        const location = "Hello Qusay the file is working"
        return location
    }
}
// import { NearestCityCalculator } from './distance_calculator.ts';

// const city =  await NearestCityCalculator.findNearestCity({latitude: 48.137154, longitude: 11.46694})
// const city =  await NearestCityCalculator.findNearestCity([49.4719058, 8.4852408])
// console.log(city)
