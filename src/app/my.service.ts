import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor() { }

  getApplicationTitle(): string {
    return 'titulek';
  }
}
