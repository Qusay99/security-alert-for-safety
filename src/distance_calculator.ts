let distance_to_each_city = [ 
    {distance: 'distance', city: 'Mannheim'},
    {distance: 'distance', city: 'Berlin'},
    {distance: 'distance', city: 'München'},
    {distance: 'distance', city: 'Hamburg'},
    {distance: 'distance', city: 'Köln'}

]

export class DistanceCalculator {

    public static getDistanceInKilometers(latitude1: number, longitude1: number, latitude2: number, longitude2: number): number {
        return DistanceCalculator.getDistance(latitude1, longitude1, latitude2, longitude2) * 1.609344
    }

    public static getDistanceInNauticMiles(latitude1: number, longitude1: number, latitude2: number, longitude2: number): number {
        return DistanceCalculator.getDistance(latitude1, longitude1, latitude2, longitude2) * 0.8684
    }

    public static getDistanceInLightYears(latitude1: number, longitude1: number, latitude2: number, longitude2: number): number {
        return DistanceCalculator.getDistance(latitude1, longitude1, latitude2, longitude2) * 1.609344 * 0.00000000000010570
    }

    private static getDistance(latitude1: number, longitude1: number, latitude2: number, longitude2: number) {
        if ((latitude1 === latitude2) && (longitude1 === longitude2)) {
            return 0
        }
        const radlatitude1 = Math.PI * latitude1 / 180
        const radlatitude2 = Math.PI * latitude2 / 180
        const theta = longitude1 - longitude2
        const radtheta = Math.PI * theta / 180
        let distance = Math.sin(radlatitude1) * Math.sin(radlatitude2) + Math.cos(radlatitude1) * Math.cos(radlatitude2) * Math.cos(radtheta)
        if (distance > 1) {
            distance = 1
        }
        distance = Math.acos(distance)
        distance = distance * 180 / Math.PI
        distance = distance * 60 * 1.1515

        return distance

    }

    
    
}

let sorteddistances = distance_to_each_city.sort((first, second) => 0 - (first.distance > second.distance ? -1 : 1));
    console.log(sorteddistances);

    console.log(distance_to_each_city[0])
