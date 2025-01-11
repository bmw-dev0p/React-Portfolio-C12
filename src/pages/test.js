function compareTriplets(a, b) {
    const scores = [0, 0]
    for (let i=0; i < 3; i++) {
        if (a[i] = b[i]){
            return;
        }
        if (a[i] > b[i]) {
            scores[0] += 1
        } else {
            scores[1] += 1
        }
    return scores;
}
}

console.log(compareTriplets([5, 6, 7], [3, 6, 10])) // [1, 1]