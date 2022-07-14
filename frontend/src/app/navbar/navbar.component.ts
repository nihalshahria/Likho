import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  user: any = null;
  isLoggedIn: boolean = false;

  constructor(
    private router: Router,
    private storageService: StorageService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
    this.getUser();
  }

  logout(): void {
    this.authService.logout();
    this.storageService.clean();
    window.location.reload();
  }

  getUser() {
    if (this.isLoggedIn) {
      this.user = this.storageService.getUser();
    }
  }

  goToProfile() {
    this.router.navigate([`/profile/${this.user.uuid}`]).then(() => {
      window.location.reload();
    });
  }
}
