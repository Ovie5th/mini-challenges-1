/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {

    //summary of steps to convert roman numeral string to equiv decimal

    //declare roman numeral set of possible symbol and their decimal equiv
    //define the constraints of roman numeral manipulation
    //no any symbol in roman should have count above 3
    //if next symbol greater than previous symbol: subtract previous symbol from next symbol
    //if a symbol has count === 3 : sum up together as triple symbol sum
    //if a symbol has count ===2 : sum up together as double symbol sum
    //if next symbol less than previous symbol and count of next symbol greater than 1: keep only previous symbol
    //if next symbol less than previous symbol and count of next symbol less than 2: keep previous symbol
    //for cases where previous symbol is kept, loop counts by 1 for other cases where you need to compair pair, loop counts by 2


}

module.exports = romanToDecimal;
