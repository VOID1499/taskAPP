import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  ngOnInit(): void {
    
  }

  constructor(
    private authService:AuthService,
    private router:Router
  ){

  }

  public errorsRegister = [];
  public user = {
    username:"",
    email:"",
    password:""
  }


  register(){
    const {username,email,password} = this.user;
      this.authService.register(username,email,password).subscribe(res=>{
      this.authService.setUser(res.user);
      this.authService.setToken(res.token)  
      this.router.navigate(["/tareas"])
    },(errorRes)=>{
      this.errorsRegister = errorRes.error.error;
    })
  }
}
