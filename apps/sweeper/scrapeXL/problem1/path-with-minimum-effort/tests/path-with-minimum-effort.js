function generateTestCases() {
    const testCases = [];

    // Helper function to generate random integer
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Helper function to generate random 2D array
    function generateRandomHeights(rows, cols) {
        return Array.from({ length: rows }, () =>
            Array.from({ length: cols }, () => getRandomInt(1, 1000000))
        );
    }

    // Generate test cases
    for (let i = 0; i < 50; i++) {
        const rows = getRandomInt(1, 100);
        const cols = getRandomInt(1, 100);
        const heights = generateRandomHeights(rows, cols);

        testCases.push({
            input: heights,
            output: null // We don't calculate the actual output here
        });
    }

    // Add some edge cases
    testCases.push({ input: [[1]], output: 0 });
    testCases.push({ input: [[1,1],[1,1]], output: 0 });
    testCases.push({ input: [[1,2,3],[4,5,6],[7,8,9]], output: 1 });
    testCases.push({ input: [[1,1,1],[1,1,1],[1,1,1]], output: 0 });
    testCases.push({ input: [[1,1000000],[1000000,1]], output: 999999 });

    return JSON.stringify(testCases);
}

console.log(generateTestCases());