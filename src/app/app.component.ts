import {Component, OnInit} from '@angular/core';

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

  constructor() {}

  countResult() {
    switch (this.operation) {
      case '+': {
        this.result = this.input1 + this.input2;
        break;
      }
      case '-': {
        this.result = this.input1 - this.input2;
        break;
      }
      case '*': {
        this.result = this.input1 * this.input2;
        break;
      }
      case '/': {
        this.result = this.input1 / this.input2;
        break;
      }
      default: {
        throw new Error('Invalid operation: ' + this.operation);
      }
    }
  }

  ngOnInit(): void {
  }
}
