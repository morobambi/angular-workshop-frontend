import { Injectable } from '@angular/core';
import {User} from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {}

  getAll(): User[] {
    return [];
    // TODO use HttpService
  }

  save(user: User) {
    // TODO use HttpService
  }

  delete(email: string) {
    // TODO use HttpService
  }
}
