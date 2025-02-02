/**
 * UberAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of ProductCollection
 *
 * @constructor
 */
angular.module('UberAPILib')
    .factory('ProductCollection', ['BaseModel', 'Product',
        function (BaseModel, Product) {
            var ProductCollection = function (obj) {
                if (!obj) {
                    this.products = null;
                } else {
                    this.products = obj.products.map(function (model) {
                        return new Product(model);
                    });
                }
            }
    
            ProductCollection.prototype = new BaseModel();
            ProductCollection.prototype.constructor = ProductCollection;
        
            /**
             * List of products
             *
             * @return {array}
             */
            ProductCollection.prototype.getProducts = function () {
                return this.products;
            };
        
            /**
             * Setter for Products
             * 
             * @param {array} value 
             */
            ProductCollection.prototype.setProducts = function (value) {
                this.products = value;
            };
        
            return ProductCollection;
        }
    ]);

}(angular));
