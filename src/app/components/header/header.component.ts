import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('sideCard') sideCard?: ElementRef;

  logOut() {
    throw new Error('Method not implemented.');
  }

  constructor(
    private router: Router,
    private userService: UserService,
    private cartService:CartService,
  ) { }

  
  cartItemCount: number = 0;
  isAdmin: boolean = false;
  isLoggedIn: boolean = false;
  isUser: boolean = false;
  sidebarShow: boolean = false;

  ngOnInit(): void {

    this.userService.isAdmin.subscribe(isAdmin => {
      this.isAdmin = isAdmin;
    })

    this.userService.isLoggedIn.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    })
    this.userService.isUser.subscribe(isUser => {
      this.isUser = isUser;
    })
  }
  closeSideBar(isShow: boolean) {
    this.sidebarShow = isShow;
  }

}
