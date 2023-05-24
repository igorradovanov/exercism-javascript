// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

/**
 * Defines the Size class using the function prototype
 * 
 * @param {number} width 
 * @param {number} height 
 */

export function Size(width = 80, height = 60) {
    this.width = width;
    this.height = height;
}

Size.prototype.resize = function (width, height) {
    this.width = width;
    this.height = height;
}