const {writeFileSync, mkdirSync} = require('fs');
require('dotenv').config();

const targetPath = './src/environments/environment.ts';
const envFileContent = `export const environment = {
  baseUrl: "${process.env['BASE_URL']}",
  apiKey: "${process.env['API_KEY']}",
  apiHost: "${process.env['API_HOST']}",
};`;

mkdirSync('./src/environments', {recursive: true});
writeFileSync(targetPath, envFileContent);
