export const oktaConfig = {
    clientId: '0oa9b5ft5sp2sg0GG5d7',
    issuer: 'https://dev-39501861.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disabledHTTPsCheck: true
};



// {
//     clientId: Application ID ( client Id),
//     issuer: 'https://issuerId(Admin Id)/oauth2/default',
//     redirectUri: 'http://localhost:3000/login/callback',
//     scopes: ['openid', 'profile', 'email'],
//     pkce: true,
//     disabledHTTPsCheck: true
// };

// npm i @okta/okta-signin-widget@6.3.3
//npm i @okta/okta-react@6.4.3