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

  public submit = false;
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
    this.submit = true; 
    this.authService.login(this.user.email,this.user.password)
    .subscribe((res)=>{
      this.submit = false;
      this.authService.setUser(res.user);
      this.authService.setToken(res.token);
      this.router.navigate(["/tareas"])
    },
    (error)=>{
      this.submit = false;
      console.log(error)
      alert("Ocurrio un error!")
    })
  
  }

}
