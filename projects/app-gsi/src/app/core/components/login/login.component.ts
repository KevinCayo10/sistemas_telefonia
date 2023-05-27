import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../helper/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'gsi-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  ocultarPassword = true;
  group: FormGroup;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.group = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  login() {
    this.authService
      .login(
        this.group.get('username')?.value,
        this.group.get('password')?.value
      )
      .subscribe(() => {
        this.router.navigate(['/reportes']);
      });
  }
}
