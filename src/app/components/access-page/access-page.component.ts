import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../../services/user-data.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-access-page',
  templateUrl: './access-page.component.html',
  styleUrls: ['./access-page.component.css']
})

export class AccessPageComponent implements OnInit {
  user: User;
  photo: string;
  img_url = 'https://images.pexels.com/photos/860590/pexels-photo-860590.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
  isAllowedAccess = true;
  minAllowedAge = 18;

  constructor(private userDataService: UserDataService, private router: Router) { }

  ngOnInit() {
    this.userDataService.currentUser.subscribe(user => this.user = user);
    console.log(this.user);
  }

  public checkAllowance() {
    this.isAllowedAccess = this.user.age >= this.minAllowedAge;
    if (this.isAllowedAccess) {
      this.photo = `url(${this.img_url})`;
    }
  }

}
