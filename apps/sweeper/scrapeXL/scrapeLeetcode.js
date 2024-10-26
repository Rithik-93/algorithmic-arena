const axios = require('axios');
const cheerio = require('cheerio');
const path = require('path');
const fs = require('fs')


function extractSlugFromUrl(url) {
  if (!url || typeof url !== 'string') {
    console.error('Invalid URL provided to extractSlugFromUrl:', url);
    return null;
  }
  const match = url.match(/\/problems\/([^/]+)/);
  return match ? match[1] : null;
}

function extractFullDescription(content) {
  return content
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractData(problemData) {
  const description = extractFullDescription(problemData.content);

  const jsonData = {
    title: problemData.title,
    description: description,
  };

  return jsonData;
}

async function getLeetCodeProblemDetails(url) {
  const slug = extractSlugFromUrl(url);

  const query = `
    query questionContent($titleSlug: String!) {
      question(titleSlug: $titleSlug) {
        title
        content
        exampleTestcases
      }
    }
  `;

  const variables = {
    titleSlug: slug,
  };

  try {
    const response = await axios.post('https://leetcode.com/graphql', {
      query: query,
      variables: variables
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Referer': `https://leetcode.com/problems/${slug}/`,
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36'
      }
    });
    // console.log(slug)

    function determineDataType(value) {
      if (Array.isArray(value)) {
        if (Array.isArray(value[0])) {
          return `list<list<int>>`;
        }
        return `list<int>`;
      } else if (typeof value === 'number') {
        return 'int';
      } else if (typeof value === 'boolean') {
        return 'bool';
      } else if (typeof value === 'string') {
        return 'string';
      } else {
        return 'unknown';
      }
    }

    function parseExampleStructure(examples) {
      let inputStructure = '';
      let outputStructure = '';

      if (examples[0] && examples[0].input) {
        const inputLines = examples[0].input.split('\n');

        inputLines.forEach(line => {
          if (line.includes('=')) {
            const [variable, value] = line.split('=').map(item => item.trim());
            const parsedValue = eval(value);
            const dataType = determineDataType(parsedValue);
            inputStructure += `Input Field: ${dataType} ${variable}\n`;
          }
        });
      }

      if (examples[0] && examples[0].output) {
        const parsedOutput = eval(examples[0].output.trim());
        const dataType = determineDataType(parsedOutput);
        outputStructure = `Output Field: ${dataType} result`;
      }

      return { inputStructure, outputStructure };
    }

    const generateProblemMD = (jsonData, examples) => {
      return `
## ${jsonData.title}
${jsonData.description}

#### Test case 1

Input

\`\`\`
${examples[0]?.input || 'N/A'}
\`\`\`

Output

\`\`\`
${examples[0]?.output || 'N/A'}
\`\`\`

#### Test case 2

Input

\`\`\`
${examples[1]?.input || 'N/A'}
\`\`\`

Output

\`\`\`
${examples[1]?.output || 'N/A'}
\`\`\`
  `;
    };

    const generateStructureMD = (jsonData, examples) => {
      const { inputStructure, outputStructure } = parseExampleStructure(examples);

      return `
Problem Name: "${jsonData.title}"
Function Name: ${jsonData.title.toLowerCase().replace(/\s+/g, '')}
Input Structure:
${inputStructure}
Output Structure:
${outputStructure}
  `.trim();
    };

    const problemData = response.data.data.question;
    const content = problemData.content;
    const jsonData = extractData(problemData);

    const $ = cheerio.load(content);

    let examples = [];

    $('pre').each((i, elem) => {
      const text = $(elem).text().trim();
      const inputMatch = text.match(/Input:\s*(.*)/)?.[1].trim();
      const outputMatch = text.match(/Output:\s*(.*)/)?.[1].trim();

      if (inputMatch && outputMatch) {
        examples.push({
          input: inputMatch,
          output: outputMatch
        });
      }
    });

    const problemContent = generateProblemMD(jsonData, examples);
    const structureContent = generateStructureMD(jsonData, examples);

    const mdFilesDir = path.join(__dirname, '..', '..', 'problems', slug);
    const problemMDPath = path.join(mdFilesDir, 'Problem.md');
    const structureMDPath = path.join(mdFilesDir, 'Structure.md');

    if (!fs.existsSync(mdFilesDir)) {
      fs.mkdirSync(mdFilesDir, { recursive: true });
    } 

    fs.writeFile(problemMDPath, problemContent, (err) => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log('Markdown file has been created successfully!');
      }
    });

    fs.writeFile(structureMDPath, structureContent, (err) => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log('Markdown file has been created successfully!');
      }
    });

    console.log(structureContent);
    return jsonData;

  } catch (error) {
    console.error('Error fetching problem details:', error.message);
    return null;
  }
}

module.exports = { getLeetCodeProblemDetails };