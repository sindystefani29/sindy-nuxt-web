import auth0 from 'auth0-js';
import EventEmitter from 'eventemitter3';

const webAuth = new auth0.WebAuth({
    domain: 'dev-18di56pe.auth0.com',
    redirectUri: 'http://localhost:3000/callback',
    clientID: 'Bzhlz3c6AvkNvQGZ2VKTyeGYSTNCzmyl',
    responseType: 'id_token',
    scope: 'openid profile email'
});

class AuthService extends EventEmitter {
  // Starts the user login flow
  login() {
    webAuth.authorize();
  }

}
export default new AuthService();