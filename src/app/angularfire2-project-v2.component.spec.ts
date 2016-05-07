import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angularfire2ProjectV2AppComponent } from '../app/angularfire2-project-v2.component';

beforeEachProviders(() => [Angularfire2ProjectV2AppComponent]);

describe('App: Angularfire2ProjectV2', () => {
  it('should create the app',
      inject([Angularfire2ProjectV2AppComponent], (app: Angularfire2ProjectV2AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angularfire2-project-v2 works!\'',
      inject([Angularfire2ProjectV2AppComponent], (app: Angularfire2ProjectV2AppComponent) => {
    expect(app.title).toEqual('angularfire2-project-v2 works!');
  }));
});
