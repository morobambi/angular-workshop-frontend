import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Calculation} from '../calculation.model';

@Component({
  selector: 'app-calculation-history',
  templateUrl: './calculation-history.component.html',
  styleUrls: ['./calculation-history.component.css']
})
export class CalculationHistoryComponent implements OnInit {

  @Input() calculationHistory: Calculation[];
  @Output() rerunCalculation = new EventEmitter<Calculation>();

  constructor() { }

  ngOnInit() {
  }

  rerun(calculation: Calculation) {
    this.rerunCalculation.emit(calculation);
  }
}
