function generateTestCases() {
    const testCases = [];

    // Helper function to generate a random graph
    function generateRandomGraph(n) {
        const graph = Array.from({ length: n }, () => []);
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                if (Math.random() < 0.5) {
                    graph[i].push(j);
                    graph[j].push(i);
                }
            }
        }
        return graph;
    }

    // Test case 1: Example 1 from the problem description
    testCases.push({
        input: [[1,2,3],[0],[0],[0]],
        output: 4
    });

    // Test case 2: Example 2 from the problem description
    testCases.push({
        input: [[1],[0,2,4],[1,3,4],[2],[1,2]],
        output: 4
    });

    // Test case 3: Minimum graph size
    testCases.push({
        input: [[0]],
        output: 0
    });

    // Test case 4: Maximum graph size (12 nodes)
    testCases.push({
        input: generateRandomGraph(12),
        output: null // Placeholder, actual output depends on the generated graph
    });

    // Test case 5: Complete graph with 5 nodes
    testCases.push({
        input: [[1,2,3,4],[0,2,3,4],[0,1,3,4],[0,1,2,4],[0,1,2,3]],
        output: 4
    });

    // Test case 6: Line graph with 6 nodes
    testCases.push({
        input: [[1],[0,2],[1,3],[2,4],[3,5],[4]],
        output: 5
    });

    // Test case 7: Star graph with 7 nodes
    testCases.push({
        input: [[1,2,3,4,5,6],[0],[0],[0],[0],[0],[0]],
        output: 6
    });

    // Generate 43 more random test cases
    for (let i = 0; i < 43; i++) {
        const n = Math.floor(Math.random() * 11) + 2; // Random size between 2 and 12
        testCases.push({
            input: generateRandomGraph(n),
            output: null // Placeholder, actual output depends on the generated graph
        });
    }

    return testCases;
}

console.log(JSON.stringify(generateTestCases()));