import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthpageComponent } from './components/authpage/authpage.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from '../components/home/home.component';

const routes: Routes = [
  
  {path:"",redirectTo:"/",pathMatch:"full"},
  {path:"",component:AuthpageComponent,children:[
    {path:"login",component:LoginComponent},
    {path:"register",component:RegisterComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
