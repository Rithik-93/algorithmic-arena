function generateTestCases() {
    const testCases = [];

    // Test case 1: Basic ascending order
    testCases.push({ input: [1, 2, 3, 4, 5], output: 5 });

    // Test case 2: Basic descending order
    testCases.push({ input: [5, 4, 3, 2, 1], output: 5 });

    // Test case 3: Single element
    testCases.push({ input: [42], output: 42 });

    // Test case 4: All same elements
    testCases.push({ input: [7, 7, 7, 7, 7], output: 7 });

    // Test case 5: Negative numbers
    testCases.push({ input: [-5, -4, -3, -2, -1], output: -1 });

    // Test case 6: Mixed positive and negative
    testCases.push({ input: [-10, 5, -3, 8, -1], output: 8 });

    // Test case 7: Large numbers
    testCases.push({ input: [1000000, 2000000, 3000000], output: 3000000 });

    // Test case 8: Small numbers
    testCases.push({ input: [0.1, 0.2, 0.3, 0.4], output: 0.4 });

    // Test case 9: Zero and positive numbers
    testCases.push({ input: [0, 1, 2, 3, 4], output: 4 });

    // Test case 10: Zero and negative numbers
    testCases.push({ input: [0, -1, -2, -3, -4], output: 0 });

    // Generate 40 more random test cases
    for (let i = 0; i < 40; i++) {
        const length = Math.floor(Math.random() * 20) + 1; // Random length between 1 and 20
        const arr = [];
        let max = -Infinity;
        for (let j = 0; j < length; j++) {
            const num = Math.floor(Math.random() * 2001) - 1000; // Random number between -1000 and 1000
            arr.push(num);
            max = Math.max(max, num);
        }
        testCases.push({ input: arr, output: max });
    }

    return testCases;
}

console.log(JSON.stringify(generateTestCases()));