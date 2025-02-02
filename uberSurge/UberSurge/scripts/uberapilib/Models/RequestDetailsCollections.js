/**
 * UberAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of RequestDetailsCollections
 *
 * @constructor
 */
angular.module('UberAPILib')
    .factory('RequestDetailsCollections', ['BaseModel', 'Driver', 'Location', 'Vehicle',
        function (BaseModel, Driver, Location, Vehicle) {
            var RequestDetailsCollections = function (obj) {
                if (!obj) {
                    this.driver = null;
                    this.eta = null;
                    this.location = null;
                    this.requestId = null;
                    this.status = null;
                    this.surgeMultiplier = null;
                    this.vehicle = null;
        
                    // Append to variable dictionary
                    this._variableDict['requestId'] = 'request_id';
                    this._variableDict['surgeMultiplier'] = 'surge_multiplier';
                } else {
                    this.driver = new Driver(obj.driver);
                    this.eta = obj.eta;
                    this.location = new Location(obj.location);
                    this.requestId = obj.request_id;
                    this.status = obj.status;
                    this.surgeMultiplier = obj.surge_multiplier;
                    this.vehicle = new Vehicle(obj.vehicle);
            
                    // Append to variable dictionary
                    this._variableDict['requestId'] = 'request_id';
                    this._variableDict['surgeMultiplier'] = 'surge_multiplier';
                }
            }
    
            RequestDetailsCollections.prototype = new BaseModel();
            RequestDetailsCollections.prototype.constructor = RequestDetailsCollections;
        
            /**
             * The object that contains driver details.
             *
             * @return {Driver}
             */
            RequestDetailsCollections.prototype.getDriver = function () {
                return this.driver;
            };
        
            /**
             * Setter for Driver
             * 
             * @param {Driver} value 
             */
            RequestDetailsCollections.prototype.setDriver = function (value) {
                this.driver = value;
            };
        
            /**
             * The estimated time of vehicle arrival in minutes.
             *
             * @return {int}
             */
            RequestDetailsCollections.prototype.getEta = function () {
                return this.eta;
            };
        
            /**
             * Setter for Eta
             * 
             * @param {int} value 
             */
            RequestDetailsCollections.prototype.setEta = function (value) {
                this.eta = value;
            };
        
            /**
             * The object that contains the location information of the vehicle and driver.
             *
             * @return {Location}
             */
            RequestDetailsCollections.prototype.getLocation = function () {
                return this.location;
            };
        
            /**
             * Setter for Location
             * 
             * @param {Location} value 
             */
            RequestDetailsCollections.prototype.setLocation = function (value) {
                this.location = value;
            };
        
            /**
             * The unique ID of the Request.
             *
             * @return {string}
             */
            RequestDetailsCollections.prototype.getRequestId = function () {
                return this.requestId;
            };
        
            /**
             * Setter for RequestId
             * 
             * @param {string} value 
             */
            RequestDetailsCollections.prototype.setRequestId = function (value) {
                this.requestId = value;
            };
        
            /**
             * The status of the Request indicating state.
             *
             * @return {string}
             */
            RequestDetailsCollections.prototype.getStatus = function () {
                return this.status;
            };
        
            /**
             * Setter for Status
             * 
             * @param {string} value 
             */
            RequestDetailsCollections.prototype.setStatus = function (value) {
                this.status = value;
            };
        
            /**
             * The surge pricing multiplier used to calculate the increased price of a Request. A multiplier of 1.0 means surge pricing is not in effect.
             *
             * @return {double}
             */
            RequestDetailsCollections.prototype.getSurgeMultiplier = function () {
                return this.surgeMultiplier;
            };
        
            /**
             * Setter for SurgeMultiplier
             * 
             * @param {double} value 
             */
            RequestDetailsCollections.prototype.setSurgeMultiplier = function (value) {
                this.surgeMultiplier = value;
            };
        
            /**
             * The object that contains vehicle details.
             *
             * @return {Vehicle}
             */
            RequestDetailsCollections.prototype.getVehicle = function () {
                return this.vehicle;
            };
        
            /**
             * Setter for Vehicle
             * 
             * @param {Vehicle} value 
             */
            RequestDetailsCollections.prototype.setVehicle = function (value) {
                this.vehicle = value;
            };
        
            return RequestDetailsCollections;
        }
    ]);

}(angular));
