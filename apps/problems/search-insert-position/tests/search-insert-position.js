function generateTestCases() {
    const testCases = [];

    for (let i = 0; i < 50; i++) {
        const arrayLength = Math.floor(Math.random() * 10000) + 1;
        const nums = [];
        let current = Math.floor(Math.random() * 10) - 5;

        for (let j = 0; j < arrayLength; j++) {
            nums.push(current);
            current += Math.floor(Math.random() * 5) + 1;
        }

        const target = Math.floor(Math.random() * (current + 10)) - 5;

        const expectedOutput = nums.findIndex(num => num >= target);
        const output = expectedOutput === -1 ? nums.length : expectedOutput;

        testCases.push({
            input: {
                nums: nums,
                target: target
            },
            output: output
        });
    }

    return testCases;
}

console.log(JSON.stringify(generateTestCases()));