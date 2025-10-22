export const environment = {
  maintenance: false,
  endpoints: {
    _self: 'http://192.168.1.58:4242',
    api: 'https://myadmin.unicolo.red/api',
    backend: 'https://localhost:9999',
    hub: 'http://localhost:9998/.well-known/mercure',
  },
  topic: {
    token: '!ChangeThisMercureHubJWTSecretKey!',
    remote: 'https://example.com/books/1',
  },
  unicoloredBaseUrl: 'http://localhost:4125',
  algolia: {
    appId: 'SUXVC6B2YE',
    apiKey: 'c6b499da6c9903652a2b4cc7a281d7b9',
  },
};
