import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'kw-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  mainVideo: string;

  constructor() {}

  ngOnInit() {
    this.mainVideo = '../../../../assets/main-background.mp4';
  }
}
