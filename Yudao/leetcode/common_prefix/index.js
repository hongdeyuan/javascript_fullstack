function isCommonPrefix(strs, middle) {
    const prefix = strs[0].substring(0, middle);
    for (let i = 1; i < strs.length; i++) {
        if (!strs[i].startsWith(prefix)) return false;
    }
    return true;


}
// const:是常量声明\

/**
 * @author dhyuan
 * @func 返回最长公共子串
 * @param strs 字符串数组
 * @return 字符串
 */
const longestCommonPrefix = (strs) => {
    // 最长的公共子串，不会比最短的字符串的长度大
    if (strs.length === 0) return '';
    if (strs.length === 1) return strs[0];
    // Number 是js的自带类

    let minLen = Number.MAX_VALUE;
    for (let i = 0; i < strs.length; i++) {
        // if (strs[i].length < minLen) {
        //     minLen = strs[i].length;
        // }
        minLen = Math.min(minLen, strs[i].length);
        // console.log(minLen);
    }

    let low = 0, //动态的 左侧
        high = minLen;

    while (low <= high) {
        const middle = (low + high) >> 1; //位移运算符  >> 相当于除2   << 相当于乘2 
        // 功能独立，公共子串
        if (isCommonPrefix(strs, middle)) {
            low = middle + 1;
        } else {
            high = middle - 1;
        }
    }

    return strs[0].substring(0, (low + high) >> 1);
}

const strs = ['flower', 'flow', 'flight'];

console.log(longestCommonPrefix(strs));