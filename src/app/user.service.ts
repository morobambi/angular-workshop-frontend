import { Injectable } from '@angular/core';
import {User} from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: Map<string, User> = new Map();

  constructor() {}

  getAll(): User[] {
    return Array.from(this.users).map(([email, user]) => user);
  }

  save(user: User) {
    this.users.set(user.email, user);
  }

  delete(email: string) {
    this.users.delete(email);
  }
}
