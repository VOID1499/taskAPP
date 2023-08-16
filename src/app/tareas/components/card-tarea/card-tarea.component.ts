import { AfterViewInit, Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { TareasService } from 'src/app/servicios/tareas.service';

@Component({
  selector: 'app-card-tarea',
  templateUrl: './card-tarea.component.html',
  styleUrls: ['./card-tarea.component.css']
})
export class CardTareaComponent implements AfterViewInit {

  @Input() tarea:any;

  constructor(
    private tareasSerivces:TareasService,
    private router:Router
  ){

  }

  ngAfterViewInit(): void {
  }

  eliminarTarea(tarea:any){
    this.tareasSerivces.eliminarTarea(tarea._id).subscribe((res)=>{
      this.router.navigate(["redirect/tareas"])
    },(error)=>{
      console.log(error);
      alert("Ocurrio un error");
    })
  }


}
