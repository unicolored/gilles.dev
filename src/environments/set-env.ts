import * as fs from 'fs';
import * as dotenv from 'dotenv';
import * as p from '../../package.json' with { type: 'json' };
import colors from 'colors/safe.js';

const setEnv = () => {
  const writeFile = fs.writeFile;
  // Configure Angular `environment.ts` file path
  const targetPath = './src/environments/environment.production.ts';
  // Load node modules
  const appVersion = p.version;
  dotenv.config({
    path: 'src/environments/.env.prod',
  });
  // `environment.ts` file structure
  const envConfigFile = `export const environment = {
  maintenance: false,
  version: '${appVersion}',
  endpoints: {
    _self: 'https://www.gilles.dev/',
    api: '${process.env['API_URL']}',
    hub: '${process.env['HUB_URL']}'
  },
  unicoloredBaseUrl: 'https://unicolo.red',
  algolia: {
    appId: '${process.env['ALGOLIA_APPID']}',
    apiKey: '${process.env['ALGOLIA_APIKEY']}',
  },
};
`;
  console.log(colors.magenta('The file `environment.ts` will be written with the following content: \n'));
  writeFile(targetPath, envConfigFile, (err: unknown) => {
    if (err) {
      console.error(err);
      throw err;
    } else {
      console.log(colors.magenta(`Angular environment.ts file generated correctly at ${targetPath} \n`));
    }
  });
};

setEnv();
