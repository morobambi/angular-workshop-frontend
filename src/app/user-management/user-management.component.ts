import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user.model';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  firstName: string;
  lastName: string;
  email: string;
  age: number;

  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadAllUsers();
  }

  loadAllUsers() {
    this.users = this.userService.getAll();
  }

  update(user: User) {
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
    this.age = user.age;
  }

  delete(user: User) {
    this.userService.delete(user.email);
    this.loadAllUsers();
  }

  saveUser() {
    this.userService.save({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      age: this.age
    });
    this.loadAllUsers();
  }
}
