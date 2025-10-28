export const environment = {
  maintenance: false,
  endpoints: {
    _self: 'http://localhost:4242',
    api: 'https://localhost:9999/api',
    backend: 'https://localhost:9999',
    hub: 'https://localhost:9999',
    meilisearch: 'http://127.0.0.1:32771/',
  },
  topic: {
    secret: '!ChangeThisMercureHubJWTSecretKey!',
    jwt: 'eyJhbGciOiJIUzI1NiJ9.eyJtZXJjdXJlIjp7InB1Ymxpc2giOlsiKiJdfX0.PXwpfIGng6KObfZlcOXvcnWCJOWTFLtswGI5DZuWSK4',
    remote: 'https://remote.com/portfolio/', // Note: I added a trailing slash for topic construction
  },
  unicoloredBaseUrl: 'http://localhost:4125',
  meilisearch: {
    indice_prefix: 'myadmin_dev_',
    search_key: '!ChangeMe!',
  },
  algolia: {
    appId: 'SUXVC6B2YE',
    apiKey: 'c6b499da6c9903652a2b4cc7a281d7b9',
  },
};
