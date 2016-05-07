import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Angularfire2ProjectV2AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(Angularfire2ProjectV2AppComponent);
