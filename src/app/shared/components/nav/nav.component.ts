import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public user = null;


  constructor(
    private authService:AuthService,
    private router:Router
  ){
  }

  ngOnInit(): void {
    
    this.authService.getUserObservable().subscribe((usuario)=>{
      this.user = usuario;
    })
    
  }


  logout(){
    this.authService.logout().subscribe((res)=>{
      console.log("Token vaciado");
      localStorage.removeItem("user")
      this.router.navigate(["/auth/login"])

    })
  }
}
