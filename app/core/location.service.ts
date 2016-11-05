import {Injectable} from 'angular2/core';
import { Location } from './location.model';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';


@Injectable()
export class LocationService {


    public location: Location ;
    constructor( public http: Http) {}



    getLocation() {

      let localCity = localStorage.getItem('city');

      if([null, undefined, ""].indexOf(localCity,0) != -1){
          navigator.geolocation.getCurrentPosition(this.successCallback,this.errorCallback,this.options);
        }
      else{
          // do something when you already have the location
        }
    }

    successCallback = (position)=> {
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;

            location['latitude'] = latitude;
            location['longitude'] = longitude;

    }

    errorCallback = (error) => {
            let errorMessage = 'Unknown error';
            switch(error.code) {
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
