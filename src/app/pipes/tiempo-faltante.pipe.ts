import { Pipe, PipeTransform } from '@angular/core';
import dayjs from "./dayjs.config"
@Pipe({
  name: 'tiempoFaltante'
})
export class TiempoFaltantePipe implements PipeTransform {

  transform(targetDate: any, args?: any): any {
    const currentDate = dayjs().format("YYYY-MM-DD");
    const fechaEnUTC = dayjs(targetDate).utc().format("YYYY-MM-DD");
    const difference = dayjs(fechaEnUTC).diff(currentDate, 'days');

    if (difference === 0) {
      return 'Hoy';
    } else if (difference === 1) {
      return 'Mañana';
    } else if (difference > 1) {
      return `En ${difference} días`;
    } else {
      return false;
    }
  }
}
