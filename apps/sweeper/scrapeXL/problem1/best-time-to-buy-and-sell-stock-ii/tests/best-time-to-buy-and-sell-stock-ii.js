function generateTestCases() {
    const testCases = [];

    // Helper function to calculate maximum profit
    function maxProfit(prices) {
        let profit = 0;
        for (let i = 1; i < prices.length; i++) {
            if (prices[i] > prices[i - 1]) {
                profit += prices[i] - prices[i - 1];
            }
        }
        return profit;
    }

    // Helper function to generate random array
    function generateRandomArray(length, max) {
        return Array.from({length}, () => Math.floor(Math.random() * max));
    }

    // Test cases from examples
    testCases.push({input: [7,1,5,3,6,4], output: 7});
    testCases.push({input: [1,2,3,4,5], output: 4});
    testCases.push({input: [7,6,4,3,1], output: 0});

    // Edge cases
    testCases.push({input: [1], output: 0});
    testCases.push({input: [1,1,1,1], output: 0});
    testCases.push({input: [10000,0,10000,0,10000], output: 30000});

    // Random test cases
    for (let i = 0; i < 44; i++) {
        const length = Math.floor(Math.random() * 30000) + 1;
        const prices = generateRandomArray(length, 10001);
        testCases.push({input: prices, output: maxProfit(prices)});
    }

    return testCases;
}

console.log(JSON.stringify(generateTestCases()));