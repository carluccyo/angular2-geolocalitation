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
        var _this = this;
        this.successCallback = function (position) {
            console.log('successCallback');
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            _this.location.latitude = latitude;
            _this.location.longitude = longitude;
            console.log('this.location.latitude: ' + _this.location.latitude);
            console.log('this.location.longitude: ' + _this.location.longitude);
        };
        this.errorCallback = function (error) {
            console.log('errorCallback');
            console.log('errorCallback error.code: ' + error.code);
            var errorMessage = 'Unknown error';
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
        this.options = {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        };
        this.location = new location_model_1.Location();
        this.initLocation();
    }
    LocationService.prototype.initLocation = function () {
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.successCallback, this.errorCallback, this.options);
        }
    };
    LocationService.prototype.getLocation = function () {
        return this.location;
    };
    LocationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], LocationService);
    return LocationService;
}());
exports.LocationService = LocationService;
//# sourceMappingURL=location.service.js.map