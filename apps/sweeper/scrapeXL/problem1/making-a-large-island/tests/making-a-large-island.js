function generateTestCases() {
    const testCases = [];

    // Helper function to generate random grid
    function generateGrid(n) {
        return Array.from({ length: n }, () =>
            Array.from({ length: n }, () => Math.round(Math.random()))
        );
    }

    // Helper function to calculate expected output
    function calculateLargestIsland(grid) {
        const n = grid.length;
        const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
        const islandMap = new Map();
        let islandId = 2;

        function dfs(i, j, id) {
            if (i < 0 || i >= n || j < 0 || j >= n || grid[i][j] !== 1) return 0;
            grid[i][j] = id;
            return 1 + directions.reduce((sum, [dx, dy]) => sum + dfs(i + dx, j + dy, id), 0);
        }

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === 1) {
                    islandMap.set(islandId, dfs(i, j, islandId));
                    islandId++;
                }
            }
        }

        let maxSize = Math.max(0, ...islandMap.values());

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === 0) {
                    const neighborSet = new Set();
                    directions.forEach(([dx, dy]) => {
                        const ni = i + dx, nj = j + dy;
                        if (ni >= 0 && ni < n && nj >= 0 && nj < n && grid[ni][nj] > 1) {
                            neighborSet.add(grid[ni][nj]);
                        }
                    });
                    const size = 1 + [...neighborSet].reduce((sum, id) => sum + islandMap.get(id), 0);
                    maxSize = Math.max(maxSize, size);
                }
            }
        }

        return maxSize;
    }

    // Generate test cases
    for (let i = 0; i < 50; i++) {
        const n = Math.floor(Math.random() * 20) + 1; // Random size from 1 to 20
        const grid = generateGrid(n);
        const output = calculateLargestIsland(JSON.parse(JSON.stringify(grid))); // Deep copy grid

        testCases.push({
            input: grid,
            output: output
        });
    }

    return testCases;
}

console.log(JSON.stringify(generateTestCases()));