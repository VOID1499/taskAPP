import { Pipe, PipeTransform } from '@angular/core';
import dayjs from './dayjs.config';
@Pipe({
  name: 'fechaYHora'
})
export class FechaYHoraPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    const fechaFormateada = dayjs(value).format('dddd D MMMM YYYY h:mm')
    return fechaFormateada;
  }

}
