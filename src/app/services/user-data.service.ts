import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '../models/user';

@Injectable()
export class UserDataService {
  user = new User();
  private userSource = new BehaviorSubject(this.user);
  currentUser = this.userSource.asObservable();

  constructor() { }

  changeUser(user: User) {
    this.userSource.next(user);
  }
}
