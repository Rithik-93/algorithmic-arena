function generateTestCases() {
    const testCases = [];

    // Helper function to generate random integer
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Helper function to calculate max XOR
    function calculateMaxXOR(nums) {
        let max = 0;
        for (let i = 0; i < nums.length; i++) {
            for (let j = i; j < nums.length; j++) {
                max = Math.max(max, nums[i] ^ nums[j]);
            }
        }
        return max;
    }

    // Generate test cases
    for (let i = 0; i < 50; i++) {
        const length = getRandomInt(1, 100);
        const nums = Array.from({ length }, () => getRandomInt(0, 2 ** 31 - 1));
        const output = calculateMaxXOR(nums);

        testCases.push({
            input: JSON.stringify(nums),
            output: output.toString()
        });
    }

    return JSON.stringify(testCases);
}

console.log(generateTestCases());