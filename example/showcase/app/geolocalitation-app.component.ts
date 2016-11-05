import {Component} from '@angular/core';
import {LocationService} from "angular2-geolocalitation/core";

@Component({
    selector: "geolocalitation-app",
    template: `
     <div class="btn-group" role="group">
        <div class="row">
          <div class="col-md-12">
            <h1>Logger's current priority level: </h1>


              <button (click)="getLocation()"> getLocation() </button>

          </div>
        </div>
      </div>

    `
})
export class GeolocalitationAppComponent{

    constructor(public locationService : LocationService){}


    getLocation(){
      this.locationService.getLocation();
    }

}
