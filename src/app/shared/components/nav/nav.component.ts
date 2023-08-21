import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit ,AfterViewInit {

  public user:any;

  constructor(
    private authService:AuthService,
    private router:Router,
  ){
  }

  ngOnInit(): void {
    
    this.authService.getUserObservable().subscribe((usuario)=>{
      this.user = usuario;
    })
    
  }

  ngAfterViewInit(): void {

   
  }



  logout(){
   this.authService.logout();
   this.router.navigate(['/'])
  }
}
