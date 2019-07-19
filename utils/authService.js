import auth0 from 'auth0-js';
import EventEmitter from 'eventemitter3';

const webAuth = new auth0.WebAuth({
    domain: 'dev-18di56pe.auth0.com',
    redirectUri: 'http://localhost:3000/callback',
    clientID: 'Bzhlz3c6AvkNvQGZ2VKTyeGYSTNCzmyl',
    responseType: 'token id_token',
    scope: 'openid profile email'
});

const localStorageKey = 'loggedIn';
const loginEvent = 'loginEvent';

class AuthService extends EventEmitter {
  
  idToken = null;
  profile = null;
  tokenExpiry = null;

  // Starts the user login flow
  login() {
    webAuth.authorize();
  }

  handleAuthentication() {
    return new Promise((reject) => {
      webAuth.parseHash((err, authResult) => {
        if (err) {
          reject(err);
        } else {
          localStorage.setItem(localStorageKey, true)
          // Set the time that the access token will expire at
          let expiresAt = JSON.stringify(
            authResult.expiresIn * 1000 + new Date().getTime()
          )
          localStorage.setItem('access_token', authResult.accessToken)
          localStorage.setItem('id_token', authResult.idToken)
          localStorage.setItem('expires_at', expiresAt)
          return true
        }
      });
    });
  }

/*
  localLogin(authResult) {
    this.idToken = authResult.idToken;
    this.profile = authResult.idTokenPayload;

    // Convert the JWT expiry time from seconds to milliseconds
    this.tokenExpiry = new Date(this.profile.exp * 1000);

    localStorage.setItem(localStorageKey, 'true');

    this.emit(loginEvent, {
      loggedIn: true,
      profile: authResult.idTokenPayload,
      state: authResult.appState || {}
    });
  }
*/

  renewTokens() {
    return new Promise((resolve, reject) => {
      if (localStorage.getItem(localStorageKey) !== "true") {
        return reject("Not logged in");
      }
      
      webAuth.checkSession({}, (err, authResult) => {
        if (err) {
          reject(err);
        } else {
          this.localLogin(authResult);
          resolve(authResult);
        }
      });
    });
  }

  logOut() {
    localStorage.removeItem(localStorageKey);

    this.idToken = null;
    this.tokenExpiry = null;
    this.profile = null;

    webAuth.logout({
      returnTo: window.location.origin
    });

    this.emit(loginEvent, { loggedIn: false });
  }

  isAuthenticated() {
    return (
      Date.now() < this.tokenExpiry &&
      localStorage.getItem(localStorageKey) === 'true'
    );
  }
  
}
export default new AuthService();