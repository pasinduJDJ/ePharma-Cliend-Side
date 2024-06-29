import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  signUpForm?: FormGroup<any>;

  constructor(private router: Router, private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {

    this.signUpForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      tp: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(11)]),
      location: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });

  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  onSignup() {

    const alertPlaceholder = document.getElementById('alert-placeholder');

    const showAlertWarning = (message: string, type: string) => {
      const alertDiv = document.createElement('div');
      alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
      alertDiv.role = 'alert';
      alertDiv.innerHTML = `
      <i class="fa-solid fa-triangle-exclamation mx-4"></i>
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      `;
      alertPlaceholder?.appendChild(alertDiv);

      setTimeout(() => {
        alertDiv.classList.remove('show');
        alertDiv.classList.add('fade');
        setTimeout(() => alertDiv.remove(), 150);
      }, 3000);
    };

    const showAlertSuccess = (message: string, type: string) => {
      const alertDiv = document.createElement('div');
      alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
      alertDiv.role = 'alert';
      alertDiv.innerHTML = `
      <i class="fa-solid fa-circle-check"></i>
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      `;
      alertPlaceholder?.appendChild(alertDiv);

      setTimeout(() => {
        alertDiv.classList.remove('show');
        alertDiv.classList.add('fade');
        setTimeout(() => alertDiv.remove(), 150);
      }, 3000);
    };


    if (this.signUpForm?.invalid) {
      showAlertWarning("Please Fill All Details.", "warning");
    }
    else if ((this.signUpForm?.controls['username'].value).toLowerCase() === "admin") {
      showAlertWarning("Username should not be 'admin'. Please choose another username.", "warning");
    }else{
      this.userService.addUser(this.signUpForm?.getRawValue()).then(result => {
        this.signUpForm?.reset();
        showAlertSuccess("User Register successfully", "success");
      });
    }
  }





}
