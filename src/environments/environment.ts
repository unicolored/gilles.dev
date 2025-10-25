export const environment = {
  maintenance: false,
  endpoints: {
    _self: 'http://localhost:4242',
    api: 'https://myadmin.unicolo.red/api',
    backend: 'https://myadmin.unicolo.red',
    hub: 'https://localhost:9999',
  },
  topic: {
    secret: '!ChangeThisMercureHubJWTSecretKey!',
    jwt: 'eyJhbGciOiJIUzI1NiJ9.eyJtZXJjdXJlIjp7InB1Ymxpc2giOlsiKiJdfX0.PXwpfIGng6KObfZlcOXvcnWCJOWTFLtswGI5DZuWSK4',
    remote: 'https://remote.com/portfolio/', // Note: I added a trailing slash for topic construction
  },
  unicoloredBaseUrl: 'http://localhost:4125',
  algolia: {
    appId: 'SUXVC6B2YE',
    apiKey: 'c6b499da6c9903652a2b4cc7a281d7b9',
  },
};
