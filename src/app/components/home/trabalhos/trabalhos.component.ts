import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-trabalhos',
  templateUrl: './trabalhos.component.html',
  styleUrls: ['./trabalhos.component.scss']
})
export class TrabalhosComponent implements OnInit {
  
  active = 0
  
  constructor(public analyticsService: AnalyticsService) { }

  ngOnInit(): void {
  }

}
