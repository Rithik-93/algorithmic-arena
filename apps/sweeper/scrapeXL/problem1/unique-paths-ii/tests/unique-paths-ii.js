function generateTestCases() {
    const testCases = [];

    function uniquePaths(obstacleGrid) {
        const m = obstacleGrid.length;
        const n = obstacleGrid[0].length;
        const dp = Array(m).fill().map(() => Array(n).fill(0));

        for (let i = 0; i < m; i++) {
            if (obstacleGrid[i][0] === 1) break;
            dp[i][0] = 1;
        }

        for (let j = 0; j < n; j++) {
            if (obstacleGrid[0][j] === 1) break;
            dp[0][j] = 1;
        }

        for (let i = 1; i < m; i++) {
            for (let j = 1; j < n; j++) {
                if (obstacleGrid[i][j] === 1) continue;
                dp[i][j] = dp[i-1][j] + dp[i][j-1];
            }
        }

        return dp[m-1][n-1];
    }

    function generateGrid(m, n, obstacleProb) {
        return Array(m).fill().map(() => 
            Array(n).fill().map(() => Math.random() < obstacleProb ? 1 : 0)
        );
    }

    // Test case 1: Example 1 from the problem description
    testCases.push({
        input: [[0,0,0],[0,1,0],[0,0,0]],
        output: 2
    });

    // Test case 2: Example 2 from the problem description
    testCases.push({
        input: [[0,1],[0,0]],
        output: 1
    });

    // Test case 3: 1x1 grid with no obstacle
    testCases.push({
        input: [[0]],
        output: 1
    });

    // Test case 4: 1x1 grid with obstacle
    testCases.push({
        input: [[1]],
        output: 0
    });

    // Test case 5: 2x2 grid with no obstacles
    testCases.push({
        input: [[0,0],[0,0]],
        output: 2
    });

    // Generate 45 random test cases
    for (let i = 0; i < 45; i++) {
        const m = Math.floor(Math.random() * 100) + 1;
        const n = Math.floor(Math.random() * 100) + 1;
        const obstacleProb = Math.random() * 0.3; // 30% chance of obstacle
        const grid = generateGrid(m, n, obstacleProb);
        testCases.push({
            input: grid,
            output: uniquePaths(grid)
        });
    }

    return testCases;
}

console.log(JSON.stringify(generateTestCases()));