"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var location_model_1 = require('./location.model');
var LocationService = (function () {
    function LocationService() {
        this.successCallback = function (position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            var userLocation = new location_model_1.Location();
            userLocation.latitude = latitude;
            userLocation.longitude = longitude;
        };
        this.errorCallback = function (error) {
            var errorMessage = 'Unknown error';
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
        this.options = {
            enableHighAccuracy: true,
            timeout: 1000,
            maximumAge: 0
        };
    }
    LocationService.prototype.getLocation = function () {
        var localCity = localStorage.getItem('city');
        if ([null, undefined, ""].indexOf(localCity, 0) != -1) {
            navigator.geolocation.getCurrentPosition(this.successCallback, this.errorCallback, this.options);
        }
        else {
        }
    };
    LocationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], LocationService);
    return LocationService;
}());
exports.LocationService = LocationService;
//# sourceMappingURL=location.service.js.map