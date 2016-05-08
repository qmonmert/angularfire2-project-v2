import {Component, Inject} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {StravaComponent} from './strava-component/strava-component';
import {ChatComponent} from './chat-component/chat-component';
import {ROUTER_DIRECTIVES, Routes} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'angularfire2-project-v2-app',
  templateUrl: 'angularfire2-project-v2.component.html',
  styleUrls: ['angularfire2-project-v2.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
@Routes([
    {path:'/chat', component: ChatComponent},
    {path:'/strava', component: StravaComponent}
])
export class Angularfire2ProjectV2AppComponent {
  
  constructor(af: AngularFire) {}
  
}
