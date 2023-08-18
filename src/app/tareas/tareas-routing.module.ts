import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareasComponent } from './components/tareas/tareas.component';
import { authTokenGuard } from '../guards/auth-token.guard';
import { FormTareaComponent } from './components/form-tarea/form-tarea.component';

const routes: Routes = [
  { path: '', component: TareasComponent, canActivate: [authTokenGuard] },
  {
    path: 'agregar',
    component: FormTareaComponent,
    pathMatch: 'full',
    canActivate: [authTokenGuard],
  },
  {
    path: 'actualizar-tarea/:id_tarea',
    component: FormTareaComponent,
    pathMatch: 'full',
    canActivate: [authTokenGuard],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TareasRoutingModule {}
