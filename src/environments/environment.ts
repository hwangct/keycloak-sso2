export const environment = {
  production: false,
  name: 'dev',
  keycloak: {
    issuer: 'http://localhost:10001/realms/development',
    redirectUri: 'http://localhost:4200/',
    clientId: 'sso1',
    scope: 'openid profile email offline_access',
  },
};
