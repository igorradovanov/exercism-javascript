// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let total = 0;
  for (let i = 0; i < birdsPerDay.length; i++) {
    total = total + birdsPerDay[i];
  }

  return total;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let total = 0;
  const daysPerWeek = 7;
  const startIndex = (week - 1) * 7; //arr starts from 0, we need -1 here
  const endIndex = startIndex + daysPerWeek;
  const birdsInSelectedWeek = birdsPerDay.slice(startIndex, endIndex);

  for (let i = 0; i < birdsInSelectedWeek.length; i++) {
    total = total + birdsInSelectedWeek[i];
  }

  return total;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  for(let i = 0; i < birdsPerDay.length; i = i + 2){
    birdsPerDay[i]++;
  }

  return birdsPerDay;
}
