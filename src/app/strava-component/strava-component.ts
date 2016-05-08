import {Component, OnInit} from '@angular/core';
import {StravaActivity} from './../strava-activity/strava-activity';
import {StravaService} from './../strava-service/strava-service';
import {StravaDistancePipe} from './../strava-distance-pipe/strava-distance-pipe';
import {StravaTimePipe} from './../strava-time-pipe/strava-time-pipe';

@Component({
  selector: 'strava-component',
  templateUrl: 'app/strava-component/strava-component.html',
  styleUrls: ['app/strava-component/strava-component.css'],
  providers: [StravaService],
  pipes: [StravaDistancePipe, StravaTimePipe]
})
export class StravaComponent implements OnInit {
  
  nbActivities: number = 3;
  activities: StravaActivity[];
  
  constructor(private stravaService: StravaService) {}

  ngOnInit() {
    this.getActivities();
  }
  
  moreActivities() {
    this.nbActivities += 5;
    this.getActivities()
  }
  
  lessActivities() {
    if (this.nbActivities > 5) {
      this.nbActivities -= 5;
      this.getActivities();
    }
  }
  
  getActivities() {
    this.stravaService.getLastStravaActivities(this.nbActivities)
        .subscribe(activities => this.activities = activities);
  }
  
}
