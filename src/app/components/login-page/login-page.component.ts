import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor(private router: Router,private userSerivce:UserService) {}
  
  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  async login(event: any) {
    let userName = event.target.username.value;
    let password = event.target.password.value;
    
    if (userName == null || userName.trim() === "") {
      alert("Please enter a username.");
    } else if (password == null || password.trim() === "") {
      alert("Please enter a password.");
    } else {
      if (userName.toLowerCase().trim() === "admin" && password === "adminpassword") {
        let adminUser = {
          username: 'admin',
          password: '*********'
        };
        this.userSerivce.isAdmin.emit(true);
        this.userSerivce.isLoggedIn.emit(true);
        localStorage.setItem('user', JSON.stringify(adminUser));
        this.router.navigate(['/productmanage']);
      } else {
        let myUsers;
        this.userSerivce.getUsers().then(users => {
          let subscription = users.subscribe(users => {
            myUsers = users.filter(user => (user.username === userName) && (user.password === password));
      
            if (myUsers.length > 0) {
              let myUser = myUsers[0];
              myUser.password = "";
              this.userSerivce.isUser.emit(true);
              this.userSerivce.isLoggedIn.emit(true);
              localStorage.setItem('user', JSON.stringify(myUser));
              this.router.navigate(['/home']);
            } else {
              alert("User not found");
            }
            subscription.unsubscribe();
          }); 
        });
      }
    }
  }
}
