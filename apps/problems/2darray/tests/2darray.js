function generateTestCases() {
    const testCases = [];

    // Helper function to generate random integer
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Helper function to calculate maximum wealth
    function calculateMaxWealth(accounts) {
        return Math.max(...accounts.map(customer => customer.reduce((sum, amount) => sum + amount, 0)));
    }

    for (let i = 0; i < 50; i++) {
        const m = getRandomInt(1, 50);  // Number of customers
        const n = getRandomInt(1, 50);  // Number of banks

        const accounts = [];
        for (let j = 0; j < m; j++) {
            const customer = [];
            for (let k = 0; k < n; k++) {
                customer.push(getRandomInt(1, 100));  // Amount in each bank account
            }
            accounts.push(customer);
        }

        const output = calculateMaxWealth(accounts);

        testCases.push({
            input: JSON.stringify(accounts),
            output: output.toString()
        });
    }

    return JSON.stringify(testCases);
}

console.log(generateTestCases());