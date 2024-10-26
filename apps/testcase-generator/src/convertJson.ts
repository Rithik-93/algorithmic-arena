import * as fs from 'fs';
import * as path from 'path';

type TestCase = {
  input: any; 
  output: any; 
};

function processProblemsDirectory(problemsDir: string): void {
  fs.readdirSync(problemsDir).forEach(problemSlug => {
    const problemDir = path.join(problemsDir, problemSlug, 'tests');

    if (fs.lstatSync(problemDir).isDirectory()) {
      const jsonFileName = `${problemSlug}.json`;
      const jsonFilePath = path.join(problemDir, jsonFileName);

      if (fs.existsSync(jsonFilePath)) {
        console.log(`Processing ${jsonFilePath}...`);
        try {
          splitJsonToInputAndRawOutput(jsonFilePath);
        } catch (error) {
          console.error(`Error processing ${jsonFilePath}:`, error);
        }
      } else {
        console.warn(`JSON file not found for ${problemSlug}: ${jsonFilePath}`);
      }
    }
  });
}

function splitJsonToInputAndRawOutput(jsonFilePath: string): void {
  const jsonData = fs.readFileSync(jsonFilePath, 'utf8');
  const testCases: TestCase[] = JSON.parse(jsonData);

  const problemDir = path.dirname(jsonFilePath);
  const inputDir = path.join(problemDir, 'inputs');
  const outputDir = path.join(problemDir, 'outputs');

  if (fs.existsSync(inputDir)) {
    fs.rmSync(inputDir, { recursive: true, force: true });
  }
  fs.mkdirSync(inputDir, { recursive: true });

  if (fs.existsSync(outputDir)) {
    fs.rmSync(outputDir, { recursive: true, force: true });
  }
  fs.mkdirSync(outputDir, { recursive: true });

  testCases.forEach((testCase, index) => {
    const inputFilePath = path.join(inputDir, `${index}.txt`);
    const outputFilePath = path.join(outputDir, `${index}.txt`);

    const inputContent = convertToPlainText(testCase.input);
    fs.writeFileSync(inputFilePath, inputContent, 'utf8');

    const outputContent = JSON.stringify(testCase.output, null, 2);
    const formattedOutputContent = outputContent.replace(/\s+/g, ' ').trim();

    fs.writeFileSync(outputFilePath, formattedOutputContent.replace(/[\n\s]/g, ''), 'utf8');
  });

  console.log(`Successfully processed ${jsonFilePath}`);
}

function convertToPlainText(obj: any): string {
  let result = '';

  const isArray = (value: any): boolean => {
    return Array.isArray(value) || (typeof value === 'string' && /^\[.*\]$/.test(value.trim()));
  };

  const processValue = (value: any): string => {
    if (typeof value === 'number' || typeof value === 'boolean' || (typeof value === 'string' && !isArray(value))) {
      return value.toString() + '\n';
    } else if (isArray(value)) {
      const array = Array.isArray(value) ? value : JSON.parse(value);
      if (Array.isArray(array[0])) {
        // 2D array
        const rows = array.length;
        const cols = array[0].length;
        let arrayResult = `${rows} ${cols}\n`;
        //@ts-ignore
        array.forEach(row => {
            //@ts-ignore
          arrayResult += row.map(el => el.toString()).join(' ') + '\n';
        });
        return arrayResult.trim() + '\n';
      } else {
        // 1D array
        const length = array.length;
        //@ts-ignore
        return `${length}\n${array.map(el => el.toString()).join(' ')}\n`;
      }
    } else {
      let objectResult = '';
      for (const key of Object.keys(value)) {
        objectResult += processValue(value[key]);
      }
      return objectResult.trim() + '\n';
    }
  };

  result += processValue(obj);
  return result.trim();
}

// Export the processProblemsDirectory function
export default processProblemsDirectory;
