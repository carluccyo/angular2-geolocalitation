import { Injectable, Optional } from "@angular/core";
import { Location } from './location.model';

@Injectable()
export class LocationService {


    public location: Location;
    constructor() { }


    getLocation() {

        let localCity = localStorage.getItem('city');

        if ([null, undefined, ""].indexOf(localCity, 0) != -1) {
            navigator.geolocation.getCurrentPosition(this.successCallback, this.errorCallback, this.options);
        }
        else {
            console.log("browser location:" + localCity);
        }
    }

    successCallback = (position: any) => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;

        let userLocation = new Location();

        userLocation.latitude = latitude;
        userLocation.longitude = longitude;

        console.log(userLocation.latitude);
        console.log(userLocation.longitude);

        localStorage.setItem('city', JSON.stringify(userLocation));

    }

    errorCallback = (error: any) => {
        let errorMessage = 'Unknown error';
        switch (error.code) {
            case 1:
                errorMessage = 'Permission denied: ' + JSON.stringify(error.code);
                break;
            case 2:
                errorMessage = 'Position unavailable: ' + JSON.stringify(error.code);
                break;
            case 3:
                errorMessage = 'Timeout: ' + JSON.stringify(error.code);
                break;
        }
        console.log(errorMessage);
    };

    options = {
        enableHighAccuracy: true,
        timeout: 1000,
        maximumAge: 0
    };

}
