/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (matrix.length === 0 || matrix[0].length === 0 || matrix[0][0] > target)
        return false;
    var i = matrix.length - 1,
        j = 0;
    while (i >= 0 && j < matrix[0].length) {
        if (matrix[i][j] === target)
            return true;
        if (matrix[i][j] < target) {
            j += 1;
        } else {
            i -= 1;
        }
    }
    return false;
};


const matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [11, 13, 14, 17, 24],
    [18, 20, 23, 26, 30]
];
const target = 5;
console.log(searchMatrix(matrix, target));