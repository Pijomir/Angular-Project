import { Component } from '@angular/core';
import { UserService } from '../../user/user.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  constructor(private userService: UserService, private router: Router) { }

  logout() {
    this.userService.logout().subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
