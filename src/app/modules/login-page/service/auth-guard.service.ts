import { Injectable, inject } from '@angular/core';
import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = async (route, state) => {

  const router: Router = inject(Router);
  const access_token = localStorage.getItem("access_token");


  if (access_token) {
      if (window.location.href.includes('auth')) {
          router.navigate(['/profile'])
      }
      return true;
  }
  return router.createUrlTree(['/auth']);
}
