import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'stravaTimePipe'
})
export class StravaTimePipe implements PipeTransform {

  transform(time: any, args?: any): any {
    return this.hhmmss(parseInt(time));
  }
  
  pad(str) {
    return ("0" + str).slice(-2);
  }
  
  hhmmss(secs) {
    let minutes = Math.floor(secs / 60);
    secs = secs % 60;
    let hours = Math.floor(minutes / 60)
    minutes = minutes % 60;
    return this.pad(hours) + ":" + this.pad(minutes) + ":" + this.pad(secs);
  }

}
