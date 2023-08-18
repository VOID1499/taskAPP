import { Component, OnInit,Input } from '@angular/core';
import { TareasService } from 'src/app/servicios/tareas.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  public tareas:any[] = [];
  
  constructor(
    private tareasService:TareasService
    ){
      this.tareasService.getTareas().subscribe((res)=>{
        this.tareas = res;
      })
    }
    
    ngOnInit(): void {
    }
}
