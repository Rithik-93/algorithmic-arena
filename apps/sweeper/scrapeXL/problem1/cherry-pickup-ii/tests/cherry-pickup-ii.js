function generateTestCases() {
    const testCases = [];

    // Helper function to generate a random grid
    function generateRandomGrid(rows, cols) {
        const grid = [];
        for (let i = 0; i < rows; i++) {
            const row = [];
            for (let j = 0; j < cols; j++) {
                row.push(Math.floor(Math.random() * 101)); // 0 to 100
            }
            grid.push(row);
        }
        return grid;
    }

    // Test case 1: Example 1 from the problem description
    testCases.push({
        input: [[3,1,1],[2,5,1],[1,5,5],[2,1,1]],
        output: 24
    });

    // Test case 2: Example 2 from the problem description
    testCases.push({
        input: [[1,0,0,0,0,0,1],[2,0,0,0,0,3,0],[2,0,9,0,0,0,0],[0,3,0,5,4,0,0],[1,0,2,3,0,0,6]],
        output: 28
    });

    // Test case 3: Minimum size grid (2x2)
    testCases.push({
        input: [[1,1],[1,1]],
        output: 4
    });

    // Test case 4: Maximum size grid (70x70)
    testCases.push({
        input: generateRandomGrid(70, 70),
        output: -1 // Placeholder, actual output depends on the generated grid
    });

    // Test case 5: Grid with all zeros
    testCases.push({
        input: [[0,0,0],[0,0,0],[0,0,0]],
        output: 0
    });

    // Test case 6: Grid with all maximum values (100)
    testCases.push({
        input: [[100,100,100],[100,100,100],[100,100,100]],
        output: 600
    });

    // Generate 44 more random test cases
    for (let i = 0; i < 44; i++) {
        const rows = Math.floor(Math.random() * 69) + 2; // 2 to 70
        const cols = Math.floor(Math.random() * 69) + 2; // 2 to 70
        testCases.push({
            input: generateRandomGrid(rows, cols),
            output: -1 // Placeholder, actual output depends on the generated grid
        });
    }

    return testCases;
}

console.log(JSON.stringify(generateTestCases()));