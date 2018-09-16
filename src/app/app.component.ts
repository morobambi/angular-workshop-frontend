import {Component, OnInit} from '@angular/core';
import {Calculation} from './calculation.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  input1: number;
  input2: number;
  operation: string;
  result: number;

  calculationHistory: Calculation[] = [];

  constructor() {}

  countResult() {
    switch (this.operation) {
      case '+': {
        this.result = this.input1 + this.input2;
        this.pushCalculationIntoHistory();
        break;
      }
      case '-': {
        this.result = this.input1 - this.input2;
        this.pushCalculationIntoHistory();
        break;
      }
      case '*': {
        this.result = this.input1 * this.input2;
        this.pushCalculationIntoHistory();
        break;
      }
      case '/': {
        this.result = this.input1 / this.input2;
        this.pushCalculationIntoHistory();
        break;
      }
      default: {
        throw new Error('Invalid operation: ' + this.operation);
      }
    }
  }

  ngOnInit(): void {
  }

  private pushCalculationIntoHistory() {
    this.calculationHistory.push({
      input1: this.input1,
      input2: this.input2,
      result: this.result,
      operation: this.operation,
    });
  }
}
