function generateTestCases() {
    const testCases = [];
    
    for (let i = 0; i < 50; i++) {
        const num1 = Math.floor(Math.random() * 1000);
        const num2 = Math.floor(Math.random() * 1000);
        const sum = num1 + num2;
        
        testCases.push({
            input: `${num1}, ${num2}`,
            output: `${sum}`
        });
    }
    
    return JSON.stringify(testCases);
}

console.log(generateTestCases());