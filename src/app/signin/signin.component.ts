import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { UserSignal } from '../signal-store/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
})
export class SigninComponent {
  signinForm: FormGroup;
  successMessage: string = '';
  userSignal = inject(UserSignal);
  router = inject(Router);

  constructor(private fb: FormBuilder) {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.signinForm.valid) {
      const email = this.signinForm.get('email')?.value;
      if (this.userSignal.getUserEmailAddress()()?.length) {
        const signupEmailAddress = this.userSignal.getUserEmailAddress()();
        if (signupEmailAddress === email) {
          this.userSignal.updateIsUserLogin(true);
          this.router.navigate(['/home']);
        } else {
          alert('please enter the message which is given for signup');
        }
      }
    }
  }
}
