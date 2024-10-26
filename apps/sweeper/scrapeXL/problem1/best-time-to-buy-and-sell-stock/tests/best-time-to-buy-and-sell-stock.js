function generateTestCases() {
    const testCases = [];

    // Helper function to generate random array
    function generateRandomArray(length, max) {
        return Array.from({ length }, () => Math.floor(Math.random() * max));
    }

    // Helper function to calculate max profit
    function maxProfit(prices) {
        let minPrice = Infinity;
        let maxProfit = 0;
        for (const price of prices) {
            if (price < minPrice) {
                minPrice = price;
            } else if (price - minPrice > maxProfit) {
                maxProfit = price - minPrice;
            }
        }
        return maxProfit;
    }

    // Generate test cases
    for (let i = 0; i < 50; i++) {
        let length = Math.floor(Math.random() * 105) + 1; // 1 to 105
        let prices = generateRandomArray(length, 10001); // 0 to 10000
        let output = maxProfit(prices);

        testCases.push({
            input: prices,
            output: output
        });
    }

    return testCases;
}

console.log(JSON.stringify(generateTestCases()));