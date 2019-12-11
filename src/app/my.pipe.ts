import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class MyPipe implements PipeTransform {

  transform(value: any, ...args: any): any {
    return value ? value.split('').reverse().join('') : value;
  }
}
