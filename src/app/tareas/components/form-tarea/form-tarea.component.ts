import { Component, OnInit } from '@angular/core';
import { FormBuilder ,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { TareasService } from 'src/app/servicios/tareas.service';
import dayjs from '../../../pipes/dayjs.config';
@Component({
  selector: 'app-form-tarea',
  templateUrl: './form-tarea.component.html',
  styleUrls: ['./form-tarea.component.css']
})
export class FormTareaComponent implements OnInit {


  private dateRegex: RegExp = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
  private id_tarea:string = "";
  public formulario_tarea = this.fb.group({
    "_id":[""],
    "titulo":["",[Validators.required,Validators.minLength(6)]],
    "descripcion":["",[Validators.required,Validators.minLength(6)]],
    "fecha":["",[Validators.required,Validators.pattern(this.dateRegex)]]
  })


  constructor(
    private fb:FormBuilder,
    private activatedRoute:ActivatedRoute,
    private tareasService:TareasService,
    private router:Router

  ){

    this.id_tarea = this.activatedRoute.snapshot.params["id_tarea"]
    if(this.id_tarea){
      this.getTarea();
    }
    

  }


  ngOnInit(): void {
    
  }


  procesarFormulario(){
    if(this.formulario_tarea.get('_id')?.value == ""){
      this.crearTarea();
    }else{
     this.actualizarTarea();
    }
  }


  crearTarea(){   
    this.tareasService.agregarTarea(this.formulario_tarea.value).subscribe((res)=>{
      alert("Tarea creada");
      this.router.navigate(["/tareas"]);
    },(error)=>{
      if(error.statusText != "OK") return alert("Ocurrio un error!")
      this.router.navigate(["/tareas"]);
    })
  }

  actualizarTarea(){
    this.tareasService.actualizarTarea(this.formulario_tarea.value).subscribe((res)=>{
      alert("Tarea actualizada!")
      this.router.navigate(["/tareas"]);
    },(error)=>{
      console.log(error)
      alert("Ocurrio un error!")
    })
  }


  getTarea(){
    this.tareasService.getTarea(this.id_tarea).subscribe((res:any)=>{
      const {_id,titulo,descripcion,fecha} = res.taskFound;
      const fechaEnUTC = dayjs(fecha).utc();
      const fecha_formateada = fechaEnUTC.format('YYYY-MM-DD')
      this.formulario_tarea.setValue({_id,titulo,descripcion,fecha:fecha_formateada})
    })
  }
  

  
}
