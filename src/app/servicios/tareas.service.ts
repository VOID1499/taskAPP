import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import  dayjs from "./../pipes/dayjs.config";


@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor(
    private http:HttpClient
  ) {}


  getTareas():Observable<any[]> {
    const url=`${environment.apiUrl}tasks`
    return this.http.get<any[]>(url);
  }

  getTarea(id:string):Observable<any[]> {
    const url=`${environment.apiUrl}tasks/${id}`
    return this.http.get<any[]>(url);
  }

  agregarTarea(data:any){
    const url=`${environment.apiUrl}tasks`
    return this.http.post(url,data);

  }

 actualizarTarea(data:any):Observable<any>{
  const url=`${environment.apiUrl}tasks/${data._id}`
  return this.http.put(url,data);
 } 

 eliminarTarea(id:string):Observable<any>{
  const url=`${environment.apiUrl}tasks/${id}`
  return this.http.delete(url)

 }

}
