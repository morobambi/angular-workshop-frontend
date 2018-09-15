import {Component, Input, OnInit} from '@angular/core';
import {MyService} from '../my.service';

@Component({
  selector: 'app-titulek',
  templateUrl: './titulek.component.html',
  styleUrls: ['./titulek.component.css']
})
export class TitulekComponent implements OnInit {

  title = '';
  @Input() show = false;

  constructor(private myService: MyService) {
  }

  ngOnInit(): void {
    this.title = this.myService.getApplicationTitle();
  }
}
