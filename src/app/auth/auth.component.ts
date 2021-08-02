import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-Auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  loginForm:any
  registerForm:any

  constructor(public router:Router, public snackBar: MatSnackBar, private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.compose([Validators.required])),
      password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)]))
    });
    this.registerForm = new FormGroup({
      name: new FormControl('',Validators.compose([Validators.required, Validators.minLength(3)]) ) ,
      email:new FormControl('',Validators.compose([Validators.required])),
      password: new FormControl('', Validators.required),
      confirmPassword :new FormControl('', Validators.required) 
    })
  }

  public onLoginFormSubmit(values:Object):void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe((res:any)=>{
       if(JSON.parse(JSON.stringify(res)).message=='Auth failed'){
        this.snackBar.open('verify your password or email', '×', { panelClass: 'warn', verticalPosition: 'top', duration: 3000 });
       
       }
       else{
        localStorage.setItem('token',JSON.stringify(res.token));
        this.authService.isLoginSubject.next(true)
        localStorage.setItem("isLogin",JSON.stringify(this.authService.isLoginSubject.value))
       
        this.snackBar.open('You signed in successfully!', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
        this.router.navigateByUrl('/home')
       
       }
        
      
      })
    }
   
  }



  public onRegisterFormSubmit(values:Object):void {
    if (this.registerForm.valid && this.registerForm.controls.password.value==this.registerForm.controls.confirmPassword.value) {
      this.authService.register(this.registerForm.value).subscribe((res)=>{
        this.snackBar.open('You registered successfully!', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
      })
     
    }
    else {
      this.snackBar.open("Password and confirm password don't match!", '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
    }
  }

}
