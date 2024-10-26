import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';
import dotenv from 'dotenv'

dotenv.config();

type problemJsonType = {
  title: string,
  description: string
}

export type generateTestCasesType = {
  problemJson: problemJsonType
}

type slugParam = {
  slug: string
}

export async function generateTestCases(
  { problemJson: { title, description } }: generateTestCasesType,
  { slug }: slugParam) {
  const preprompt = `You are given a JSON object describing a LeetCode problem. Generate and return a JavaScript file that when run ,creates 50 test cases for the problem correctly and returns it in {{input:... , output:... },{input2:... , output2:... }...} format. Ensure the inputs cover a wide range within the problem’s constraints.Don't Explain or write anything other than the Code in your response because your response is directly getting placed in a .js file so make sure there's nothing other than the code.`
  const requestData = {
    model: "claude-3-5-sonnet-20240620",
    max_tokens: 4096,
    messages: [
      { role: "user", content: preprompt + JSON.stringify({ title, description }, null, 2) }
    ]
  };

  const apiUrl = 'https://api.anthropic.com/v1/messages';

  try {

    const response = await axios.post(apiUrl, requestData, {
      headers: {
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json'
      }
    });

    if (response && response.data && response.data.content && response.data.content.length > 0) {
      const jsFileContent = response.data.content[0].text;
      // console.log(jsFileContent)

      console.log(jsFileContent + "\n this is jsFileContent")

      const directoryPath = path.join(__dirname, '..', '..', 'problems', slug ,'tests');
      if (!fs.existsSync(directoryPath)) {
        fs.mkdirSync(directoryPath, { recursive: true });
      }

      const filePath = path.join(directoryPath, `${slug}.js`);
      fs.writeFileSync(filePath, jsFileContent);

      console.log(`JavaScript file saved successfully at: ${filePath}`);
    } else {
      console.error('No valid choices found in the response:', response.data);
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error generating test cases:', error.response ? error.response.data : error.message);
    } else {
      console.error('Unexpected error:', error);
    }
  }
} 