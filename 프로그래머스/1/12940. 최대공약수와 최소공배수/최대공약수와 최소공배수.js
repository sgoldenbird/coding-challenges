function solution(n, m) {
    const gcdFn = (a, b) => (b === 0 ? a : gcdFn(b, a % b));
    const gcdValue = gcdFn(n, m);
    const lcmValue = (n * m) / gcdValue;

    return [gcdValue, lcmValue];
}