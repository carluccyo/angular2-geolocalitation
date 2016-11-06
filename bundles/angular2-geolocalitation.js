var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("angular2-geolocalitation/app/core/location.model", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Location;
    return {
        setters:[],
        execute: function() {
            Location = (function () {
                function Location() {
                }
                Object.defineProperty(Location.prototype, "latitude", {
                    get: function () {
                        return this._latitude;
                    },
                    set: function (latitude) {
                        this._latitude = latitude;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Location.prototype, "longitude", {
                    get: function () {
                        return this._longitude;
                    },
                    set: function (longitude) {
                        this._longitude = longitude;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Location;
            }());
            exports_1("Location", Location);
        }
    }
});
System.register("angular2-geolocalitation/app/core/location.service", ["@angular/core", "angular2-geolocalitation/app/core/location.model"], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var core_1, location_model_1;
    var LocationService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (location_model_1_1) {
                location_model_1 = location_model_1_1;
            }],
        execute: function() {
            LocationService = (function () {
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
            exports_2("LocationService", LocationService);
        }
    }
});
System.register("angular2-geolocalitation/core", ["angular2-geolocalitation/app/core/location.model", "angular2-geolocalitation/app/core/location.service"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_3(exports);
    }
    return {
        setters:[
            function (location_model_2_1) {
                exportStar_1(location_model_2_1);
            },
            function (location_service_1_1) {
                exportStar_1(location_service_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=angular2-geolocalitation.js.map