function generateTestCases() {
    const testCases = [];
    const fibonacci = [1, 1];

    for (let i = 2; i <= 45; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    for (let i = 1; i <= 45; i++) {
        testCases.push({
            input: i,
            output: fibonacci[i]
        });
    }

    // Add 5 more random test cases within the constraint range
    for (let i = 0; i < 5; i++) {
        const n = Math.floor(Math.random() * 45) + 1;
        testCases.push({
            input: n,
            output: fibonacci[n]
        });
    }

    return testCases;
}

console.log(JSON.stringify(generateTestCases()));