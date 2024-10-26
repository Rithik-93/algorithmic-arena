function generateTestCases() {
    const testCases = [];

    // Helper function to generate random array
    function generateRandomArray(length) {
        return Array.from({ length }, () => Math.floor(Math.random() * 101));
    }

    // Test case 1: Example 1
    testCases.push({ input: [3,1,5,8], output: 167 });

    // Test case 2: Example 2
    testCases.push({ input: [1,5], output: 10 });

    // Test case 3: Minimum length
    testCases.push({ input: [50], output: 50 });

    // Test case 4: Maximum length
    testCases.push({ input: generateRandomArray(300), output: null });

    // Test case 5: All zeros
    testCases.push({ input: Array(100).fill(0), output: 0 });

    // Test case 6: All ones
    testCases.push({ input: Array(100).fill(1), output: null });

    // Test case 7: Ascending order
    testCases.push({ input: Array.from({ length: 50 }, (_, i) => i + 1), output: null });

    // Test case 8: Descending order
    testCases.push({ input: Array.from({ length: 50 }, (_, i) => 50 - i), output: null });

    // Test case 9: Alternating high and low values
    testCases.push({ input: Array.from({ length: 50 }, (_, i) => i % 2 === 0 ? 100 : 1), output: null });

    // Test case 10: Random array with length 10
    testCases.push({ input: generateRandomArray(10), output: null });

    // Generate 40 more random test cases
    for (let i = 0; i < 40; i++) {
        const length = Math.floor(Math.random() * 300) + 1;
        testCases.push({ input: generateRandomArray(length), output: null });
    }

    return testCases;
}

console.log(JSON.stringify(generateTestCases()));