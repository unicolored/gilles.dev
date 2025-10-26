export const environment = {
  maintenance: false,
  endpoints: {
    _self: 'http://localhost:4242',
    api: 'https://myadmin.unicolo.red/api',
    backend: 'https://myadmin.unicolo.red',
    hub: 'https://localhost:9999',
    meilisearch: 'https://meilisearch.unicolo.red',
  },
  topic: {
    secret: '!ChangeThisMercureHubJWTSecretKey!',
    jwt: 'eyJhbGciOiJIUzI1NiJ9.eyJtZXJjdXJlIjp7InB1Ymxpc2giOlsiKiJdfX0.PXwpfIGng6KObfZlcOXvcnWCJOWTFLtswGI5DZuWSK4',
    remote: 'https://remote.com/portfolio/', // Note: I added a trailing slash for topic construction
  },
  unicoloredBaseUrl: 'http://localhost:4125',
  meilisearch: {
    indice_prefix: 'myadmin_dev_',
    search_key: 'a26bbc7143fda5790a80193258f0280dffd1de8f5b1bc65df0de9dd030e2abe8',
  },
  algolia: {
    appId: 'SUXVC6B2YE',
    apiKey: 'c6b499da6c9903652a2b4cc7a281d7b9',
  },
};
