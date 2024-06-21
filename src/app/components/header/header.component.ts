import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SignInPageComponent } from '../sign-in-page/sign-in-page.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(
    private ngbModal:NgbModal,
  ){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  openLogin(){
    this.ngbModal.open(SignInPageComponent)
 }
}
