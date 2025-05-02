import { CanActivateChildFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateChildFn = (childRoute, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Check if the user is authenticated
  if (authService.isAuthenticated()) {
    return true; // Allow access to child routes if authenticated
  } else {
    // If not authenticated, redirect to login page
    router.navigate(['/signin']);
    return false; // Deny access to child routes
  }
};
