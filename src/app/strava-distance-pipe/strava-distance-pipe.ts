import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'stravaDistancePipe'
})
export class StravaDistancePipe implements PipeTransform {

  transform(dist: any, args?: any): any {
    let distance = parseFloat(dist) / 1000;
    return Math.round((parseFloat(dist) / 1000)*10)/10 + "kms";
  }

}
