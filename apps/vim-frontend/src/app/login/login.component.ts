import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'vim-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [ReactiveFormsModule],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup; // Add '!' to indicate that loginForm will be initialized later

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      twoFactorCode: [''],
      twoFactorRecoveryCode: [''],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      console.log('Form submitted:', formData);
      // Implement your login logic here
    } else {
      // Form is invalid, do something (e.g., show error messages)
    }
  }
}
