const fs = require('fs');
const path = require('path');

function processProblemsDirectory(problemsDir) {
  fs.readdirSync(problemsDir).forEach(problemSlug => {
    const problemDir = path.join(problemsDir, problemSlug);

    // Check if it's a directory
    if (fs.lstatSync(problemDir).isDirectory()) {
      const jsonFileName = `${problemSlug}.json`;
      const jsonFilePath = path.join(problemDir, 'tests', jsonFileName);

    //   console.log(jsonFilePath,"asdasd");
      if (fs.existsSync(jsonFilePath)) {
        console.log(`Processing ${jsonFilePath}...`);
        try {
          splitJsonToInputOutput(jsonFilePath);
        } catch (error) {
          console.error(`Error processing ${jsonFilePath}:`, error);
        }
      } else {
        console.warn(`JSON file not found for ${problemSlug}: ${jsonFilePath}`);
        // Continue to the next directory without failing
      }
    }
  });
}

function splitJsonToInputOutput(jsonFilePath) {
  const jsonData = fs.readFileSync(jsonFilePath, 'utf8');
  const testCases = JSON.parse(jsonData);

  const problemDir = path.dirname(jsonFilePath);
  const inputDir = path.join(problemDir, 'inputs');
  const outputDir = path.join(problemDir, 'outputs');
  console.log(inputDir);

  // Create or clear the inputs directory
  if (fs.existsSync(inputDir)) {
    fs.rmSync(inputDir, { recursive: true, force: true });
  }
  fs.mkdirSync(inputDir, { recursive: true });

  // Create or clear the outputs directory
  if (fs.existsSync(outputDir)) {
    fs.rmSync(outputDir, { recursive: true, force: true });
  }
  fs.mkdirSync(outputDir, { recursive: true });

  testCases.forEach((testCase, index) => {
    const inputFilePath = path.join(inputDir, `${index}.txt`);
    const outputFilePath = path.join(outputDir, `${index}.txt`);

    const inputContent = convertToPlainText(testCase.input);
    fs.writeFileSync(inputFilePath, inputContent, 'utf8');

    const outputContent = convertToPlainText(testCase.output);
    fs.writeFileSync(outputFilePath, outputContent, 'utf8');
  });

  console.log(`Successfully processed ${jsonFilePath}`);
}

function convertToPlainText(obj) {
  let result = '';

  if (
    typeof obj === 'number' ||
    typeof obj === 'string' ||
    typeof obj === 'boolean'
  ) {
    // Scalar value
    result += obj.toString();
  } else if (Array.isArray(obj)) {
    if (Array.isArray(obj[0])) {
      // 2D array
      const rows = obj.length;
      const cols = obj[0].length;
      result += `${rows} ${cols}\n`;
      obj.forEach(row => {
        result += row.map(el => el.toString()).join(' ') + '\n';
      });
    } else {
      const length = obj.length;
      result += `${length}\n`;
      result += obj.map(el => el.toString()).join(' ');
    }
  } else if (typeof obj === 'object' && obj !== null) {
    for (const key of Object.keys(obj)) {
      const valueStr = convertToPlainText(obj[key]);
      result += valueStr + '\n';
    }
  } else {
    result += '';
  }

  return result.trim();
}

module.exports = processProblemsDirectory;


