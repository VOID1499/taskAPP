import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareasRoutingModule } from './tareas-routing.module';
import { TareasComponent } from './components/tareas/tareas.component';
import { FormTareaComponent } from './components/form-tarea/form-tarea.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardTareaComponent } from './components/card-tarea/card-tarea.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    TareasComponent,
    FormTareaComponent,
    CardTareaComponent,
  ],
  imports: [
    CommonModule,
    TareasRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class TareasModule { }
