import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../Services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  let service = inject(AuthService);

  if (service.isConnected)
  return true;
  else
  return false;

};
