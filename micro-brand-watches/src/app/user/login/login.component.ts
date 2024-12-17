import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { EmailDirective } from '../../directives/email.directive';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, EmailDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  domains = ['bg', 'com'];
  constructor(private userService: UserService, private router: Router) { }

  login(form: NgForm) {
    if (form.invalid) {
      console.error('Invalid Login Form');
      return;
    }

    const { email, password } = form.value;

    this.userService.login(email, password).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
