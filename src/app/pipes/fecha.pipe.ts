import { Pipe, PipeTransform } from '@angular/core';
import dayjs from './dayjs.config';


@Pipe({
  name: 'fecha'
})
export class FechaPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    
    const fechaFormateada = dayjs(value).utc().format("dddd D MMMM YYYY")
    
    return fechaFormateada;
  }

}
