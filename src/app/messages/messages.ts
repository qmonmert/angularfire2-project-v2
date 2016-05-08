import {Component} from '@angular/core';
import {AngularFire} from 'angularfire2';
import {Observable} from 'rxjs/Observable';
import {Message} from './../message/message';

@Component({
  selector: 'messages',
  templateUrl: 'app/messages/messages.html',
  styleUrls: ['app/messages/messages.css'],
  directives: [Message]
})
export class Messages {

  messages: Message[];
  
  constructor(af: AngularFire) {
    af.database.list('/messages').subscribe(messages => {
      this.messages = messages;
      this.messages.reverse();
    });
  }

}
