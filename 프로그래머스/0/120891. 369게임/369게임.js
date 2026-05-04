function solution(order) {
    return [...String(order)].filter(char => "369".includes(char)).length;
}