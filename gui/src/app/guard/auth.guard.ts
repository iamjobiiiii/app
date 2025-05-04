import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { inject } from '@angular/core';
export const authGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {

  const authService = inject(AuthService); 
  const router = inject(Router); 
  
  const expectedRole = route.data['role'];
  const user = authService.getUser(); //  // get role and isAuthenticated from localStorage

  if (!user?.isAuthenticated) {
    router.navigate(['/signin']);
    console.log('Route when the user is not authenticated');
    return false;
  }

  if (expectedRole && user.role !== expectedRole) {
    router.navigate(['/signin']); // Route when the user lacks permission
    console.log('Route when the user lacks permission');
    return false;
  }

  return true; // Access granted

};
