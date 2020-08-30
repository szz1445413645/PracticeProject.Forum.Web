export const environment = {
  production: false,
  application: {
    name: 'Forum',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44368',
    clientId: 'Forum_App',
    dummyClientSecret: '1q2w3e*',
    scope: 'Forum',
    showDebugInformation: true,
    oidc: false,
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44363',
    },
  },
  localization: {
    defaultResourceName: 'Forum',
  },
};
