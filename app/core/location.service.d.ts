import { Location } from './location.model';
import { Logger } from 'angular2-logger/core';
export declare class LocationService {
    private logger;
    location: Location;
    constructor(logger: Logger);
    getLocation(): void;
    successCallback: (position: any) => void;
    errorCallback: (error: any) => void;
    options: {
        enableHighAccuracy: boolean;
        timeout: number;
        maximumAge: number;
    };
}
