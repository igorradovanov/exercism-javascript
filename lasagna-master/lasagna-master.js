/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

/**
 * Returns cooking status based on time
 * 
 * @param {number} time 
 * @returns cooking status
 */

export function cookingStatus(time) {
    if (time == 0) {
        return 'Lasagna is done.';
    } else if (time > 0) {
        return 'Not done, please wait.'
    } else if (time === undefined) {
        return 'You forgot to set the timer.'
    }
}

/**
 * Returns preparation time in minutes
 * 
 * @param {array} layers 
 * @param {number} time 
 * @returns {number} preparation time
 */
export function preparationTime(layers, time = 2) {
    return layers.length * time;
}

/**
 * Calculates the quantities or layers
 * 
 * @param {array} layers 
 * @returns {object} quantities of noodles and sauces
 */
export function quantities(layers) {
    const NOODLE_LAYER_GRAMS = 50;
    const SAUCE_LAYER_LITERS = 0.2;

    let noodles_total = 0;
    let sauce_total = 0;

    for (let layer of layers) {
        if (layer == 'noodles') {
            noodles_total += NOODLE_LAYER_GRAMS;
        } else if (layer == 'sauce') {
            sauce_total += SAUCE_LAYER_LITERS;
        }
    }

    return { noodles: noodles_total, sauce: sauce_total };
}

/**
 * Adds the secret ingredient from the friends list
 * 
 * @param {array} friendsList 
 * @param {array} myList 
 */
export function addSecretIngredient(friendsList, myList) {
    const FRIENDS_LIST_LENGTH = friendsList.length;
    const SECRET_INGREDIENT = friendsList[FRIENDS_LIST_LENGTH - 1];
    myList.push(SECRET_INGREDIENT);
}

/**
 * Scale the recipe ingredients based on the portion size
 * 
 * @param {object} recipe 
 * @param {number} portions 
 * @returns {object} scalled recipe
 */
export function scaleRecipe(recipe, portions) {
    const DEFAULT_PORTIONS = 2;
    const scale_recipe = {...recipe};

    for(let ingredient in scale_recipe){
        scale_recipe[ingredient] = (scale_recipe[ingredient]/DEFAULT_PORTIONS) * portions;
    }
    return scale_recipe;
}