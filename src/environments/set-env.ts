const setEnv = () => {
  const fs = require('fs');
  const writeFile = fs.writeFile;
  // Configure Angular `environment.ts` file path
  const targetPath = './src/environments/environment.production.ts';
  // Load node modules
  const colors = require('colors');
  const appVersion = require('../../package.json').version;
  require('dotenv').config({
    path: 'src/environments/.env.prod',
  });
  // `environment.ts` file structure
  const envConfigFile = `export const environment = {
  maintenance: false,
  version: '${appVersion}',
  endpoints: {
    _self: 'https://www.gilles.dev/',
    api: '${process.env['API_URL']}'
  },
  unicoloredBaseUrl: 'https://unicolo.red',
  algolia: {
    appId: '${process.env['ALGOLIA_APPID']}',
    apiKey: '${process.env['ALGOLIA_APIKEY']}',
  },
  webPageMetasMap: new Map<PageIdSlugEnum, WebPageMetas>()
    .set(PageIdSlugEnum.home, GillesDevMetas[PageIdSlugEnum.home])
    .set(PageIdSlugEnum.about, GillesDevMetas[PageIdSlugEnum.about])
    .set(PageIdSlugEnum.contact, GillesDevMetas[PageIdSlugEnum.contact]),
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
