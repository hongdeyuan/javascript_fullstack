/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */
var superEggDrop = function(K, N) {
    return recursive(K, N);
};

var recursive = function(K, N) {
    if (N == 0 || N == 1 || K == 1) {
        return N;
    }

    let minimun = N;
    for (let i = 1; i <= N; i++) {
        let tMin = Math.max(recursive(K - 1, i - 1), recursive(K, N - i));
        minimun = Math.min(minimun, 1 + tMin);
    }
    return minimun;
}

console.log("F的值为 \t" + superEggDrop(2, 6));