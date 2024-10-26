function generateTestCases() {
    const testCases = [];

    // Helper function to generate random grid
    function generateRandomGrid(m, n, maxVal) {
        return Array.from({ length: m }, () =>
            Array.from({ length: n }, () => Math.floor(Math.random() * (maxVal + 1)))
        );
    }

    // Helper function to calculate minimum path sum
    function minPathSum(grid) {
        const m = grid.length;
        const n = grid[0].length;
        const dp = Array.from({ length: m }, () => new Array(n).fill(0));

        dp[0][0] = grid[0][0];

        for (let i = 1; i < m; i++) {
            dp[i][0] = dp[i - 1][0] + grid[i][0];
        }

        for (let j = 1; j < n; j++) {
            dp[0][j] = dp[0][j - 1] + grid[0][j];
        }

        for (let i = 1; i < m; i++) {
            for (let j = 1; j < n; j++) {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
            }
        }

        return dp[m - 1][n - 1];
    }

    // Generate test cases
    for (let i = 0; i < 50; i++) {
        let m, n;
        if (i < 10) {
            m = Math.floor(Math.random() * 5) + 1;
            n = Math.floor(Math.random() * 5) + 1;
        } else if (i < 20) {
            m = Math.floor(Math.random() * 20) + 5;
            n = Math.floor(Math.random() * 20) + 5;
        } else if (i < 30) {
            m = Math.floor(Math.random() * 50) + 20;
            n = Math.floor(Math.random() * 50) + 20;
        } else if (i < 40) {
            m = Math.floor(Math.random() * 100) + 50;
            n = Math.floor(Math.random() * 100) + 50;
        } else {
            m = Math.floor(Math.random() * 200) + 1;
            n = Math.floor(Math.random() * 200) + 1;
        }

        const grid = generateRandomGrid(m, n, 200);
        const output = minPathSum(grid);

        testCases.push({
            input: JSON.stringify(grid),
            output: output.toString()
        });
    }

    return JSON.stringify(testCases);
}

console.log(generateTestCases());