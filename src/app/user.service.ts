import { Injectable } from '@angular/core';
import {User} from './user.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<User[]> {
    return this.http.get<User[]>('api/user');
  }

  save(user: User) {
    return this.http.post<void>('api/user', user);
  }

  delete(email: string) {
    return this.http.delete<void>('api/user/' + email);
  }
}
