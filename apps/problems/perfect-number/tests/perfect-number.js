function generateTestCases() {
    const testCases = [];
    const perfectNumbers = [6, 28, 496, 8128, 33550336];

    // Generate test cases for perfect numbers
    for (let num of perfectNumbers) {
        testCases.push({ input: num, output: true });
    }

    // Generate test cases for non-perfect numbers
    const nonPerfectNumbers = [
        1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 14, 15, 18, 20, 21, 25, 27, 30, 36, 40,
        42, 50, 60, 70, 80, 90, 100, 120, 150, 200, 250, 300, 400, 500, 600,
        700, 800, 900, 1000, 1500, 2000, 3000, 5000, 10000
    ];

    for (let num of nonPerfectNumbers) {
        testCases.push({ input: num, output: false });
    }

    // Add edge cases
    testCases.push({ input: 1, output: false });  // Smallest positive integer
    testCases.push({ input: 100000000, output: false });  // Large number

    return testCases;
}

console.log(JSON.stringify(generateTestCases()));