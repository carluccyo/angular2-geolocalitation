import { Location } from './location.model';
export declare class LocationService {
    location: Location;
    constructor();
    getLocation(): void;
    successCallback: (position: any) => void;
    errorCallback: (error: any) => void;
    options: {
        enableHighAccuracy: boolean;
        timeout: number;
        maximumAge: number;
    };
}
