import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MyService} from '../my.service';

@Component({
  selector: 'app-titulek',
  templateUrl: './titulek.component.html',
  styleUrls: ['./titulek.component.css']
})
export class TitulekComponent implements OnInit {

  title = '';
  @Input() show = false;
  @Output() showChange = new EventEmitter<boolean>();

  constructor(private myService: MyService) {
  }

  ngOnInit(): void {
    this.title = this.myService.getApplicationTitle();
  }

  buttonClicked() {
    this.show = false;
    this.showChange.emit(this.show);
  }
}
