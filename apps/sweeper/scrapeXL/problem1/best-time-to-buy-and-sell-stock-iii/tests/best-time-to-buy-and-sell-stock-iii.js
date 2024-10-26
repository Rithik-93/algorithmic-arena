function generateTestCases() {
    const testCases = [];

    // Helper function to generate random array
    function generateRandomArray(length, min, max) {
        return Array.from({ length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
    }

    // Helper function to calculate max profit
    function maxProfit(prices) {
        if (prices.length < 2) return 0;
        
        let buy1 = Infinity, buy2 = Infinity;
        let sell1 = 0, sell2 = 0;
        
        for (let price of prices) {
            buy1 = Math.min(buy1, price);
            sell1 = Math.max(sell1, price - buy1);
            buy2 = Math.min(buy2, price - sell1);
            sell2 = Math.max(sell2, price - buy2);
        }
        
        return sell2;
    }

    // Test cases from examples
    testCases.push({ input: [3,3,5,0,0,3,1,4], output: 6 });
    testCases.push({ input: [1,2,3,4,5], output: 4 });
    testCases.push({ input: [7,6,4,3,1], output: 0 });

    // Edge cases
    testCases.push({ input: [1], output: 0 });
    testCases.push({ input: [1,1], output: 0 });
    testCases.push({ input: [0,0,0], output: 0 });
    testCases.push({ input: [100000,0], output: 0 });
    testCases.push({ input: [0,100000], output: 100000 });

    // Random test cases
    for (let i = 0; i < 42; i++) {
        const length = Math.floor(Math.random() * 100000) + 1;
        const prices = generateRandomArray(length, 0, 100000);
        testCases.push({ input: prices, output: maxProfit(prices) });
    }

    return testCases;
}

console.log(JSON.stringify(generateTestCases()));