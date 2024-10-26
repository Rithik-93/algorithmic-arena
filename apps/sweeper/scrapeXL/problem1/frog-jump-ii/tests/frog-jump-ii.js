function generateTestCases() {
    const testCases = [];

    // Helper function to generate random integer within range
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Helper function to generate sorted array of stones
    function generateStones(length) {
        const stones = [0];
        for (let i = 1; i < length; i++) {
            stones.push(stones[i - 1] + getRandomInt(1, 1e9 - stones[i - 1]));
        }
        return stones;
    }

    // Helper function to calculate the minimum cost
    function calculateMinCost(stones) {
        let maxJump = 0;
        for (let i = 2; i < stones.length; i++) {
            maxJump = Math.max(maxJump, stones[i] - stones[i - 2]);
        }
        return maxJump;
    }

    // Generate test cases
    for (let i = 0; i < 50; i++) {
        const length = getRandomInt(2, 20); // Using smaller lengths for simplicity
        const stones = generateStones(length);
        const output = calculateMinCost(stones);

        testCases.push({
            input: JSON.stringify(stones),
            output: output.toString()
        });
    }

    return JSON.stringify(testCases);
}

console.log(generateTestCases());