import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Listen to route changes and handle fragment scrolling
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        // Small delay to ensure the page has loaded
        setTimeout(() => {
          const fragment = this.route.snapshot.fragment;
          if (fragment) {
            this.scrollToElement(fragment);
          }
        }, 100);
      });
  }

  private scrollToElement(elementId: string): void {
    const element = document.querySelector(`#${elementId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
