function generateTestCases() {
    const testCases = [];

    // Test case 1: Example 1 from the problem description
    testCases.push({ input: [0,1,3,5,6,8,12,17], output: true });

    // Test case 2: Example 2 from the problem description
    testCases.push({ input: [0,1,2,3,4,8,9,11], output: false });

    // Test case 3: Minimum length array
    testCases.push({ input: [0,1], output: true });

    // Test case 4: Maximum length array (2000 elements)
    const maxLengthArray = Array.from({ length: 2000 }, (_, i) => i);
    testCases.push({ input: maxLengthArray, output: true });

    // Test case 5: Large gaps between stones
    testCases.push({ input: [0,1,3,6,10,15,21,28], output: true });

    // Test case 6: Impossible jump at the end
    testCases.push({ input: [0,1,3,5,7,9,12,15,18,22], output: false });

    // Test case 7: All stones are consecutive
    testCases.push({ input: [0,1,2,3,4,5,6,7,8,9], output: true });

    // Test case 8: Large jumps required
    testCases.push({ input: [0,1,3,6,10,15,21,28,36,45,55], output: true });

    // Test case 9: Alternating small and large gaps
    testCases.push({ input: [0,1,3,4,7,8,12,13,18,19,25], output: true });

    // Test case 10: Impossible from the start
    testCases.push({ input: [0,2,4,6,8,10], output: false });

    // Generate more random test cases
    for (let i = 0; i < 40; i++) {
        const length = Math.floor(Math.random() * 1999) + 2; // Random length between 2 and 2000
        const stones = [0];
        let lastStone = 0;
        for (let j = 1; j < length; j++) {
            lastStone += Math.floor(Math.random() * 10) + 1; // Random increment between 1 and 10
            stones.push(lastStone);
        }
        const output = Math.random() < 0.5; // Randomly set output to true or false
        testCases.push({ input: stones, output });
    }

    return testCases;
}

console.log(JSON.stringify(generateTestCases()));