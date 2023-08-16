import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  public user = {
    email:"",
    password:""
  }

  constructor(
    private authService:AuthService,
    private router:Router
  ){
    
  }
  
  ngOnInit(): void {
    
  }

  login(){

    this.authService.login(this.user.email,this.user.password)
    .subscribe((user)=>{
      localStorage.setItem("user",JSON.stringify(user));
      this.authService.setUser(user)
      this.router.navigate(["/tareas"])
    })
  }

}
