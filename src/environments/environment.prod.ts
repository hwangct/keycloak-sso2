export const environment = {
  production: true,
  name: 'prod',
  azure: {
    issuer: 'https://idsvr4.azurewebsites.net',
    redirectUri: 'http://localhost:4200/',
    clientId: 'spa',
    scope: 'openid profile email offline_access api',
  },
};
