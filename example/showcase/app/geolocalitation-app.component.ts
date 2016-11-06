import {Component} from '@angular/core';
import {LocationService, Location} from "angular2-geolocalitation/core";

@Component({
    selector: "geolocalitation-app",
    template: `
     <div class="btn-group" role="group">
        <div class="row">
          <div class="col-md-12">
            <h1>Browser current position: </h1>
            <pre>latitude: {{location? location.latitude : ''}}</pre>
            <pre>longitude: {{location? location.longitude : ''}}</pre>
            <button (click)="getLocation()"> getLocation() </button>
          </div>
        </div>
      </div>
    `
})
export class GeolocalitationAppComponent{

    location : Location;

    constructor(public locationService : LocationService){}

    getLocation(){
      this.location = this.locationService.getLocation();
    }

}
