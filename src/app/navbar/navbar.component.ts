import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn :boolean=false ;
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.authService.isLoginSubject.next(this.isLoggedIn =JSON.parse(localStorage.getItem("isLogin") || "false" ))
    console.log( this.isLoggedIn =JSON.parse(localStorage.getItem("isLogin") || "false") )
     console.log(this.authService.isLoginSubject.value);
  }
  logout(){
    localStorage.removeItem('token');
    this.authService.isLoginSubject.next(false);
    localStorage.setItem("isLogin",JSON.stringify(this.authService.isLoginSubject.value))
  }
  }


