import {Component, Inject} from '@angular/core';
import {FirebaseAuth} from 'angularfire2';
import {Messages} from './../messages/messages';
import {FormMessage} from './../form-message/form-message';
import {StravaComponent} from './../strava-component/strava-component';

import {FIREBASE_PROVIDERS, defaultFirebase, AngularFire, firebaseAuthConfig, AuthProviders, AuthMethods} from 'angularfire2';

@Component({
  selector: 'chat-component',
  templateUrl: 'app/chat-component/chat-component.html',
  styleUrls: ['app/chat-component/chat-component.css'],
  directives: [Messages, FormMessage, StravaComponent]
})
export class ChatComponent {

  username: string;
  profileImageURL : string;
  socialNetwork: string;
  
  constructor(@Inject(FirebaseAuth) public auth: FirebaseAuth) {
    if (this.auth.getAuth() !== null && this.auth.getAuth().twitter) {
      this.username = this.auth.getAuth().twitter.username;
      this.profileImageURL = this.auth.getAuth().twitter.profileImageURL;
      this.socialNetwork = 'Twitter';
    }
    if (this.auth.getAuth() !== null && this.auth.getAuth().facebook) {
      this.username = this.auth.getAuth().facebook.displayName;
      this.profileImageURL = this.auth.getAuth().facebook.profileImageURL;
      this.socialNetwork = 'Facebook';
    }
  }
  
  loginTwitter() {
    this.auth.login().then(result => {
      this.username = result.twitter.username;
      this.profileImageURL = result.twitter.profileImageURL;
      this.socialNetwork = 'Twitter';
    });
  }
  
  loginFB() {
    this.auth.login({provider: AuthProviders.Facebook}).then(result => {
      this.username = result.facebook.displayName;
      this.profileImageURL = result.facebook.profileImageURL;
      this.socialNetwork = 'Facebook';
    });
  }
  
  logout() {
    this.auth.logout();
  }

}
