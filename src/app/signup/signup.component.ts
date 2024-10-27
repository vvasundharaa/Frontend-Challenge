import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserSignal } from '../signal-store/store';

interface UserForm {
  name: FormControl<string | null>;
  email: FormControl<string | null>;
  message: FormControl<string | null>;
}
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  signupForm: FormGroup<UserForm>;
  successMessage: string = '';

  userSignal = inject(UserSignal);

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: [''],
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const email = this.signupForm.get('email')?.value;
      if (email) {
        this.userSignal.updateEmailAddress(email);
        this.successMessage = 'Form submitted successfully!';
      }
    }
  }
}
