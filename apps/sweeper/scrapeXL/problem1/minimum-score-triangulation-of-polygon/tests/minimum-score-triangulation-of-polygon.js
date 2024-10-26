function generateTestCases() {
    const testCases = [];

    // Basic test cases
    testCases.push({ input: [1, 2, 3], output: 6 });
    testCases.push({ input: [3, 7, 4, 5], output: 144 });
    testCases.push({ input: [1, 3, 1, 4, 1, 5], output: 13 });

    // Edge cases
    testCases.push({ input: [1, 1, 1], output: 1 });
    testCases.push({ input: [100, 100, 100], output: 1000000 });

    // Random test cases
    for (let i = 0; i < 45; i++) {
        const n = Math.floor(Math.random() * 48) + 3; // 3 <= n <= 50
        const values = [];
        for (let j = 0; j < n; j++) {
            values.push(Math.floor(Math.random() * 100) + 1); // 1 <= values[i] <= 100
        }
        testCases.push({ input: values, output: minScoreTriangulation(values) });
    }

    return testCases;
}

function minScoreTriangulation(values) {
    const n = values.length;
    const dp = Array.from({ length: n }, () => new Array(n).fill(0));

    for (let len = 2; len < n; len++) {
        for (let i = 0; i + len < n; i++) {
            const j = i + len;
            dp[i][j] = Infinity;
            for (let k = i + 1; k < j; k++) {
                dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k][j] + values[i] * values[k] * values[j]);
            }
        }
    }

    return dp[0][n - 1];
}

console.log(JSON.stringify(generateTestCases()));