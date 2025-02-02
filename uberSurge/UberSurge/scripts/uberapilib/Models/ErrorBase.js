/**
 * UberAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of ErrorBase
 *
 * @constructor
 */
angular.module('UberAPILib')
    .factory('ErrorBase', ['BaseModel', 'Errors',
        function (BaseModel, Errors) {
            var ErrorBase = function (obj) {
                if (!obj) {
                    this.errors = null;
                    this.meta = null;
                } else {
                    this.errors = obj.errors.map(function (model) {
                        return new Errors(model);
                    });
                    this.meta = obj.meta;
                }
            }
    
            ErrorBase.prototype = new BaseModel();
            ErrorBase.prototype.constructor = ErrorBase;
        
            /**
             * TODO: Write general description for this method
             *
             * @return {array}
             */
            ErrorBase.prototype.getErrors = function () {
                return this.errors;
            };
        
            /**
             * Setter for Errors
             * 
             * @param {array} value 
             */
            ErrorBase.prototype.setErrors = function (value) {
                this.errors = value;
            };
        
            /**
             * TODO: Write general description for this method
             *
             * @return {string}
             */
            ErrorBase.prototype.getMeta = function () {
                return this.meta;
            };
        
            /**
             * Setter for Meta
             * 
             * @param {string} value 
             */
            ErrorBase.prototype.setMeta = function (value) {
                this.meta = value;
            };
        
            return ErrorBase;
        }
    ]);

}(angular));
