import { Injectable, Optional } from "@angular/core";
import { Location } from './location.model';

import { Observable } from 'rxjs/Observable';


@Injectable()
export class LocationService {

    location: Location;

    constructor() {
        this.location = new Location();
        this.initLocation();
    }

    initLocation() {
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                this.successCallback,
                this.errorCallback,
                this.options
            );
        }
    }

    getLocation(): Location {
        return this.location;
    }

    successCallback = (position: any) => {

        console.log('successCallback');

        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;

        this.location.latitude = latitude;
        this.location.longitude = longitude;

        console.log('this.location.latitude: ' + this.location.latitude);
        console.log('this.location.longitude: ' + this.location.longitude);

    }

    errorCallback = (error: any) => {

        console.log('errorCallback');
        console.log('errorCallback error.code: ' + error.code);

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
        timeout: 10000,
        maximumAge: 0
    };

}
