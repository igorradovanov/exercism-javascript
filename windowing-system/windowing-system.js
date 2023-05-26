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

Size.prototype.resize = function (/** @type {number} */ newWidth, /** @type {number} */ newHeight) {
    this.width = newWidth;
    this.height = newHeight;
}

/**
 * Defines the Position class using the function prototype
 * 
 * @param {number} x 
 * @param {number} y 
 */

export function Position(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}

Position.prototype.move = function (/** @type {number} */ newX, /** @type {number} */ newY) {
    this.x = newX;
    this.y = newY;
}

/**
 * Defines the ProgramWind class with the default constructor
 * 
 */

export class ProgramWindow {
    constructor() {
        this.screenSize = new Size(800, 600);
        this.size = new Size();
        this.position = new Position();
    }

    /**
     * @param {Size} Size
     */
    resize(Size) {

        if (Size.width < 1 && Size.height < 1) {
            this.size.resize(1, 1);
            return;
        }

        if (this.position.x + Size.width < this.screenSize.width && this.position.y + Size.height < this.screenSize.height) {
            this.size.resize(Size.width, Size.height);
        } else {
            const maxWidth = this.screenSize.width - this.position.x;
            const maxHeight = this.screenSize.height - this.position.y;
            const newWidth = Math.min(maxWidth, Size.width);
            const newHeight = Math.min(maxHeight, Size.height);
            this.size.resize(newWidth, newHeight);
        }
    }

    /**
     * @param {Position} Position
     */
    move(Position) {

        if (Position.x < 0 && Position.y < 0) {
            this.position.move(0, 0);
            return;
        }

        if (this.size.width + Position.x < this.screenSize.width && this.size.height + Position.y < this.screenSize.height) {
            this.position.move(Position.x, Position.y)
        } else {
            const maxWidth = this.screenSize.width - this.size.width;
            const maxHeight = this.screenSize.height - this.size.height;
            const newWidth = Math.min(maxWidth, Position.x);
            const newHeight = Math.min(maxHeight, Position.y);
            this.position.move(newWidth, newHeight);
        }
    }
}