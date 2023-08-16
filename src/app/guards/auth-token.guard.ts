import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot ,Router} from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
export const authTokenGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
  
  const authService = inject(AuthService);
  const router = inject(Router)
  let tokenCookie = authService.getCookie("token");
  if(tokenCookie && tokenCookie != "" ) return  true
  return router.navigate(["/auth/login"]);
  
  
};
