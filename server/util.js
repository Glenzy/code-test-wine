const orderBy = require('lodash/_baseOrderBy');
/**
 *
 * @param {*} array of objects
 * @param {*} key one of [year, variety, region]
 * @param {*} value percentage
 *
 * This function returns an array containing the broken down data for each endpoint based on the key.
 * It takes the original array, the key by which you want to extract and sort the data and percentage of each element,
 */

const getBreakDown = (array = [], key = '', value = '') => {
  const breakdown = [];
  array.map((element) => {
    if (breakdown.filter((el) => `${el.key}` === `${element[key]}`).length > 0) {
      breakdown.map((el, index) => {
        if (`${el.key}` === `${element[key]}`) {
          return (breakdown[index][value] = breakdown[index][value] + element[value]);
        }
        return;
      });
    } else {
      breakdown.push({ key: element[key], percentage: element[value] });
    }
  });
  return orderBy(breakdown, ['percentage'], ['desc']);
};

const mergeBreakDowns = (breakdownA = [], breakdownB = [], key = '') => {
  return;
};

module.exports = {
  getBreakDown,
};
