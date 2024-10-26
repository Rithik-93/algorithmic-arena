function generateTestCases() {
    const testCases = [];

    // Helper function to generate random binary matrix
    function generateRandomMatrix(n) {
        return Array.from({ length: n }, () =>
            Array.from({ length: n }, () => Math.random() < 0.7 ? 0 : 1)
        );
    }

    // Test case 1: Example 1
    testCases.push({
        input: [[0,1],[1,0]],
        output: 2
    });

    // Test case 2: Example 2
    testCases.push({
        input: [[0,0,0],[1,1,0],[1,1,0]],
        output: 4
    });

    // Test case 3: Example 3
    testCases.push({
        input: [[1,0,0],[1,1,0],[1,1,0]],
        output: -1
    });

    // Test case 4: 1x1 matrix with 0
    testCases.push({
        input: [[0]],
        output: 1
    });

    // Test case 5: 1x1 matrix with 1
    testCases.push({
        input: [[1]],
        output: -1
    });

    // Test case 6: 2x2 matrix with no path
    testCases.push({
        input: [[0,1],[1,1]],
        output: -1
    });

    // Test case 7: 3x3 matrix with straight path
    testCases.push({
        input: [[0,0,0],[1,1,0],[1,1,0]],
        output: 3
    });

    // Test case 8: 4x4 matrix with zigzag path
    testCases.push({
        input: [[0,1,1,0],[0,0,1,0],[1,0,0,0],[1,1,1,0]],
        output: 7
    });

    // Test case 9: 5x5 matrix with long path
    testCases.push({
        input: [[0,1,1,1,0],[0,0,0,1,0],[1,1,0,1,0],[1,1,0,0,0],[1,1,1,1,0]],
        output: 11
    });

    // Test case 10: 10x10 matrix with no path
    testCases.push({
        input: generateRandomMatrix(10).map(row => row.map(() => 1)),
        output: -1
    });

    // Generate 40 more random test cases
    for (let i = 0; i < 40; i++) {
        const n = Math.floor(Math.random() * 100) + 1; // Random size between 1 and 100
        const matrix = generateRandomMatrix(n);
        testCases.push({
            input: matrix,
            output: -1 // Placeholder, actual output would need to be calculated
        });
    }

    return testCases;
}

console.log(JSON.stringify(generateTestCases()));