
//const x = document.getElementById("demo");
  //function getLocation() {
      //if (navigator.geolocation) {
        //navigator.geolocation.getCurrentPosition(showPosition);
      //} else {
       // x.innerHTML = "Geolocation is not supported by this browser.";
     // }
    //}
    
    //function showPosition(position) {
     // x.innerHTML = "Latitude: " + position.coords.latitude +
      //"<br>Longitude: " + position.coords.longitude;
      //console.log(position)
    //}
import { IPLocationService } from "https://deno.land/x/location/iplocationservice.ts"
import { CityLocationService } from "https://deno.land/x/location/citylocationservice.ts"


const ip = '94.134.112.230'
const ipLocation = await IPLocationService.getIPLocation(ip)

console.log(`\nI found the following location for ip ${ip}: \n${JSON.stringify(ipLocation)}\n`)



const countryCode = 'DE'
const cityName = 'Mannheim' 
const cityLocation = await CityLocationService.getCityLocation(countryCode, cityName)

console.log(`The city you asked for is about here: \n${JSON.stringify(cityLocation)}\n`)