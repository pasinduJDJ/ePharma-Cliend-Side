import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router:Router , 
    private userService:UserService
  ){}

  isAdmin:boolean = false;
  isLoggedIn:boolean = false;
  isUser:boolean = false;

  ngOnInit(): void {

    this.userService.isAdmin.subscribe(isAdmin=>{
      this.isAdmin=isAdmin;
    })

    this.userService.isLoggedIn.subscribe(isLoggedIn=>{
      this.isLoggedIn=isLoggedIn;
    })
    this.userService.isUser.subscribe(isUser=>{
      this.isUser=isUser;
    })
  }
  
}
