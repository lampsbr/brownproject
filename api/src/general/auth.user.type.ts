export class AuthzUser {
    email: string;
    id: string;
    permissions?: string[];
}

/*{
  'http://brownproject.com/email': 'lamparolho@gmail.com',
  iss: 'https://dev-cuavqhmw.us.auth0.com/',
  sub: 'google-oauth2|109316802394276075816',
  aud: [ 'api.brownproject', 'https://dev-cuavqhmw.us.auth0.com/userinfo' ],
  iat: 1633444397,
  exp: 1633530797,
  azp: 'xARuFrirf00g8umADgPtq0d6kBgAgBSD',
  scope: 'openid profile email',
  permissions: [ 'root' ]
} */