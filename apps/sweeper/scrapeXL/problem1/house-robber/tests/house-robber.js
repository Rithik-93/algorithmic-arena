function generateTestCases() {
    const testCases = [];

    // Helper function to generate random array
    function generateRandomArray(length) {
        return Array.from({ length }, () => Math.floor(Math.random() * 401));
    }

    // Helper function to calculate maximum robbed amount
    function rob(nums) {
        if (nums.length === 0) return 0;
        if (nums.length === 1) return nums[0];
        if (nums.length === 2) return Math.max(nums[0], nums[1]);

        let dp = new Array(nums.length);
        dp[0] = nums[0];
        dp[1] = Math.max(nums[0], nums[1]);

        for (let i = 2; i < nums.length; i++) {
            dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i]);
        }

        return dp[nums.length - 1];
    }

    // Generate test cases
    for (let i = 0; i < 50; i++) {
        const length = Math.floor(Math.random() * 100) + 1; // 1 to 100
        const nums = generateRandomArray(length);
        const output = rob(nums);

        testCases.push({
            input: JSON.stringify(nums),
            output: output
        });
    }

    return JSON.stringify(testCases);
}

console.log(generateTestCases());