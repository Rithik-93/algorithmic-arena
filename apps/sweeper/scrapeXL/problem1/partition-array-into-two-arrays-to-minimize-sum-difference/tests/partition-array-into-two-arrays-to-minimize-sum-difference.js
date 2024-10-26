function generateTestCases() {
    const testCases = [];

    // Helper function to generate random integer within a range
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Helper function to calculate the minimum difference
    function minDifference(nums) {
        const n = nums.length / 2;
        const total = nums.reduce((sum, num) => sum + num, 0);
        const target = total / 2;

        const dp = new Array(n + 1).fill(0).map(() => new Set());
        dp[0].add(0);

        for (const num of nums) {
            for (let i = n; i > 0; i--) {
                for (const sum of dp[i - 1]) {
                    dp[i].add(sum + num);
                }
            }
        }

        let minDiff = Infinity;
        for (const sum of dp[n]) {
            minDiff = Math.min(minDiff, Math.abs(total - 2 * sum));
        }

        return minDiff;
    }

    // Generate test cases
    for (let i = 0; i < 50; i++) {
        const n = getRandomInt(1, 15);
        const nums = Array.from({ length: 2 * n }, () => getRandomInt(-107, 107));
        const output = minDifference(nums);

        testCases.push({
            input: nums,
            output: output
        });
    }

    return testCases;
}

console.log(JSON.stringify(generateTestCases()));