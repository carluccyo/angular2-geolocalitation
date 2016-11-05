export class Location {

    private _latitude: string;
    private _longitude: string;


    get latitude(): string {
        return this._latitude;
    }

    set latitude(latitude: string) {
        this._latitude = latitude;
    }

    get longitude(): string {
        return this._longitude;
    }

    set longitude(longitude: string) {
        this._longitude = longitude;
    }

}
