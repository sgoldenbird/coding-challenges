function solution(arr) {
    const min = Math.min(...arr);
    const result = arr.filter(i => i!==min);
    return result.length ? result : [-1];
}