import {Injectable} from '@angular/core';
import {Http, Response, Jsonp} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StravaService {
  
  url: string = 'https://www.strava.com/api/v3/athlete/activities?callback=JSONP_CALLBACK&access_token=7352ab3baeb484779ced1f9a35c03bcd4340a403&per_page=';

  constructor(private http: Http, private jsonp: Jsonp) {}
  
  getLastStravaActivities(nbActivities: number) {
    // return this.http.get('app/strava-service/activities.json')
    //         .map((res: Response) => res.json());
    return this.jsonp.get(this.url + nbActivities)
                      .map(res => res.json());
  }

}
