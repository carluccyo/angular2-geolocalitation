"use strict";
var Location = (function () {
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
exports.Location = Location;
//# sourceMappingURL=location.model.js.map