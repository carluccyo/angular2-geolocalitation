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
            // do something when you already have the location
        }
    }

    successCallback = (position: any) => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;

        let userLocation = new Location();

        userLocation.latitude = latitude;
        userLocation.longitude = longitude;

    }

    errorCallback = (error: any) => {
        let errorMessage = 'Unknown error';
        switch (error.code) {
            case 1:
                errorMessage = 'Permission denied';
                break;
            case 2:
                errorMessage = 'Position unavailable';
                break;
            case 3:
                errorMessage = 'Timeout';
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
