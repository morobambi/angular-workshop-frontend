import { Injectable } from '@angular/core';
import {User} from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: Map<string, User> = new Map();

  constructor() {}

  getAll(): User[] {
    return [];
    // TODO
  }

  save(user: User) {
    // TODO
  }

  delete(email: string) {
    // TODO
  }
}
