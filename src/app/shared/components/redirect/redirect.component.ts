import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent {


  constructor(
    private activateRoute:ActivatedRoute,
    private router:Router
    ){

    const rutaDestino = activateRoute.snapshot.params['ruta_destino'];
    router.navigate([`${rutaDestino}`]);

  }

}
