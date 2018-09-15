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
  @Output() hide = new EventEmitter<void>();

  constructor(private myService: MyService) {
  }

  ngOnInit(): void {
    this.title = this.myService.getApplicationTitle();
  }

  buttonClicked() {
    this.hide.emit();
  }
}
