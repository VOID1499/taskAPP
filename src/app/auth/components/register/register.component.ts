import { Component, OnInit } from '@angular/core';
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
    private authService:AuthService
  ){

  }

  public errorsRegister = [];
  public user = {
    username:"void1499",
    email:"erick.olivares.gonzalez@gmail.com",
    password:"void1499"
  }


  register(){
    const {username,email,password} = this.user;
    this.authService.register(username,email,password).subscribe(res=>{
      console.log(res)
    },(errorRes)=>{
      //que es esoooooooo!
      this.errorsRegister = errorRes.error.error;
    })
  }
}
