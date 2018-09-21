import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Link } from '../../models/link';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  links: Link[];

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.links = this.router.config.filter(route => route.path).map(route => {
          return {
            name: route.path,
            isActive: event.url === `/${route.path}`
          };
        });
      }
    });
  }
}
