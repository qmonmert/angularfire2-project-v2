import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {Angularfire2ProjectV2AppComponent, environment} from './app/';
import {FIREBASE_PROVIDERS, defaultFirebase, AuthMethods, AuthProviders, firebaseAuthConfig} from 'angularfire2';
import {ROUTER_PROVIDERS} from '@angular/router';
import {HTTP_PROVIDERS, JSONP_PROVIDERS} from '@angular/http';

if (environment.production) {
  enableProdMode();
}

bootstrap(Angularfire2ProjectV2AppComponent, [
  FIREBASE_PROVIDERS,
  defaultFirebase('https://popping-fire-9851.firebaseio.com/'),
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  JSONP_PROVIDERS,
  firebaseAuthConfig({
    provider: AuthProviders.Twitter,
    method: AuthMethods.Popup,
    remember: 'default',
    scope: ['email']
  })
]);
