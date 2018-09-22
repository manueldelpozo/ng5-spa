import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../../services/user-data.service';
import { User } from '../../models/user';

const img_url = 'https://images.pexels.com/photos/860590/pexels-photo-860590.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
const minAllowedAge = 18;

@Component({
  selector: 'app-access-page',
  templateUrl: './access-page.component.html',
  styleUrls: ['./access-page.component.css']
})

export class AccessPageComponent implements OnInit {
  user: User;
  photo: string;
  isAllowedAccess = true;

  constructor(private userDataService: UserDataService, private router: Router) { }

  ngOnInit() {
    this.userDataService.currentUser.subscribe(user => this.user = user);
  }

  public checkAllowance() {
    this.isAllowedAccess = this.user.age >= minAllowedAge;
    if (this.isAllowedAccess) {
      this.photo = `url(${img_url})`;
    }
  }
}
