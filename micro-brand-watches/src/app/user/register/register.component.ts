import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';
import { NgForm, FormsModule } from '@angular/forms';
import { EmailDirective } from '../../directives/email.directive';
import { matchPasswordsValidator } from '../../utils/match-passwords.validator';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, FormsModule, EmailDirective],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  domains = ['bg', 'com'];
  constructor(private userService: UserService, private router: Router) { };

  register(form: NgForm) {
    if (form.invalid) {
      console.error('Invalid Register Form');
      return;
    }

    const { username, email, password, rePassword } = form.value;

    form.control.setValidators([matchPasswordsValidator('password', 'rePassword')]);

    if (form.valid) {
      this.userService.register(username, email, password, rePassword).subscribe(() => {
        this.router.navigate(['/']);
      });
    }

  }
}
