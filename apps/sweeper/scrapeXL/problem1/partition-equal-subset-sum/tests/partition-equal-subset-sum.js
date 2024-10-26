function generateTestCases() {
    const testCases = [];

    // Helper function to generate random array
    function generateRandomArray(length, max) {
        return Array.from({ length }, () => Math.floor(Math.random() * max) + 1);
    }

    // Helper function to check if array can be partitioned
    function canPartition(nums) {
        const sum = nums.reduce((a, b) => a + b, 0);
        if (sum % 2 !== 0) return false;
        const target = sum / 2;
        const dp = new Set([0]);
        for (let num of nums) {
            const newDp = new Set(dp);
            for (let t of dp) {
                if (t + num === target) return true;
                if (t + num < target) newDp.add(t + num);
            }
            dp = newDp;
        }
        return false;
    }

    // Generate test cases
    for (let i = 0; i < 50; i++) {
        const length = Math.floor(Math.random() * 200) + 1;
        const nums = generateRandomArray(length, 100);
        const output = canPartition(nums);
        testCases.push({ input: nums, output });
    }

    return testCases;
}

console.log(JSON.stringify(generateTestCases()));