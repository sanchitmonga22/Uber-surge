/**
 * UberAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of Meta
 *
 * @constructor
 */
angular.module('UberAPILib')
    .factory('Meta', ['BaseModel', 'SurgeConfirmation',
        function (BaseModel, SurgeConfirmation) {
            var Meta = function (obj) {
                if (!obj) {
                    this.surgeConfirmation = null;
        
                    // Append to variable dictionary
                    this._variableDict['surgeConfirmation'] = 'surge_confirmation';
                } else {
                    this.surgeConfirmation = new SurgeConfirmation(obj.surge_confirmation);
            
                    // Append to variable dictionary
                    this._variableDict['surgeConfirmation'] = 'surge_confirmation';
                }
            }
    
            Meta.prototype = new BaseModel();
            Meta.prototype.constructor = Meta;
        
            /**
             * TODO: Write general description for this method
             *
             * @return {SurgeConfirmation}
             */
            Meta.prototype.getSurgeConfirmation = function () {
                return this.surgeConfirmation;
            };
        
            /**
             * Setter for SurgeConfirmation
             * 
             * @param {SurgeConfirmation} value 
             */
            Meta.prototype.setSurgeConfirmation = function (value) {
                this.surgeConfirmation = value;
            };
        
            return Meta;
        }
    ]);

}(angular));
