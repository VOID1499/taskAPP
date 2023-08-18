import { NgModule } from "@angular/core";
import { ActivatedRoute, RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { RedirectComponent } from "./shared/components/redirect/redirect.component";
import { ProfileComponent } from "./auth/components/profile/profile.component";

const routes: Routes = [
  { path:"", component:HomeComponent, pathMatch: "full" },
 
  { path: "inicio", component:HomeComponent, pathMatch: "full" },
 
  {
    path: "tareas",
    loadChildren: () =>
      import("./tareas/tareas.module").then((m) => m.TareasModule),
  },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
  },
  {path:"redirect/:ruta_destino" ,component:RedirectComponent},
  {path:"**",redirectTo:""}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
