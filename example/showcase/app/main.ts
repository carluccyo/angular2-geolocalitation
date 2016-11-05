import {bootstrap} from '@angular/platform-browser-dynamic';
import {GeolocalitationAppComponent} from "./geolocalitation-app.component";
import {LocationService} from "angular2-geolocalitation/core";


bootstrap( GeolocalitationAppComponent,[ LocationService]);
