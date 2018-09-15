import {Component, OnInit} from '@angular/core';
import {MyService} from './my.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '';

  constructor(private myService: MyService) {

  }

  ngOnInit(): void {
    this.title = this.myService.getApplicationTitle();
  }
}
