import { Request } from 'https://deno.land/x/request@1.3.2/mod.ts'
import { DistanceCalculator } from "https://deno.land/x/distancecalculator/distance-calculator.ts"


//define arrays

export class NearestCityCalculator {

    // retrieve the location_to_chat_IDs.json
    public static async getCityJSON() {
    // public async getCityJSON() {
        let x = await Request.get('https://raw.githubusercontent.com/Qusay99/security-alert-for-safety/main/location_to_chat_IDs.json');
        return x
    }
    public static async findNearestCity(userGeo: any){
    // public static async findNearestCity(userGeo: number[]) {
    // public async findNearestCity(userGeo: any) {
        var citiesgeo: any;
        var distance: Number;
        var location: any;
        var userGeo: any;

        userGeo = userGeo;
        distance = 1000000000;
        location = "";
        citiesgeo = await this.getCityJSON().then((response) => {return response});

        for(let prop in citiesgeo){
            let entry = citiesgeo[prop];
            if (Object.keys(entry).includes("geo_data")){
                var x: any;
                x = Object.values(entry)[1]
                let long = Object.values(x[0])[0];
                let lat = Object.values(x[0])[1];
                // let calculated_distance = DistanceCalculator.getDistanceInKilometers(Number(lat), Number(long), userGeo.latitude, userGeo.longitude)
                let calculated_distance = DistanceCalculator.getDistanceInKilometers(Number(lat), Number(long), userGeo[0], userGeo[1])
                if (calculated_distance < distance){
                    distance = calculated_distance
                    location = Object.values(entry)[0]
                    // console.log(location)
                }
            }
        }
        return location
    }
}
// import { NearestCityCalculator } from './distance_calculator.ts';

// const city =  await NearestCityCalculator.findNearestCity({latitude: 48.137154, longitude: 11.46694})
// const city =  await NearestCityCalculator.findNearestCity([49.4719058, 8.4852408])
// console.log(city)
