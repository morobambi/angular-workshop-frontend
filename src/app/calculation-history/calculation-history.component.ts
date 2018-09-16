import {Component, Input, OnInit} from '@angular/core';
import {Calculation} from '../calculation.model';

@Component({
  selector: 'app-calculation-history',
  templateUrl: './calculation-history.component.html',
  styleUrls: ['./calculation-history.component.css']
})
export class CalculationHistoryComponent implements OnInit {

  @Input() calculationHistory: Calculation[];

  constructor() { }

  ngOnInit() {
  }
}
