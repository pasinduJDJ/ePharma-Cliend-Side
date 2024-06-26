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
    if (this.signUpForm?.invalid) {
      alert("Please check the form again.");
    }
    else if ((this.signUpForm?.controls['username'].value).toLowerCase() === "admin") {
      alert("Username should not be 'admin'. Please choose another username.");
    }else{
      this.userService.addUser(this.signUpForm?.getRawValue()).then(result => {
        this.signUpForm?.reset();
        alert("User Register successfully");
      });
    }
  }





}
