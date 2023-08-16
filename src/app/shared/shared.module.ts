import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FechaYHoraPipe } from '../pipes/fecha-y-hora.pipe'; 
import { FechaPipe } from '../pipes/fecha.pipe';
import * as dayjs from 'dayjs';
import 'dayjs/locale/es'; // Importa el paquete de localización en español
import { TiempoFaltantePipe } from '../pipes/tiempo-faltante.pipe';
import { RedirectComponent } from './components/redirect/redirect.component';
dayjs.locale("es");

@NgModule({
  declarations: [
    NavComponent,
    FechaYHoraPipe,
    FechaPipe,
    FechaYHoraPipe,
    TiempoFaltantePipe,
    RedirectComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    CommonModule,
    NavComponent,
    FormsModule,
    FechaPipe,
    FechaYHoraPipe,
    TiempoFaltantePipe,
    RedirectComponent
  ]
})
export class SharedModule { }
