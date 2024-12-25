import {CanActivateFn, Router} from "@angular/router";
import {inject, Injectable} from "@angular/core";
import {AuthService} from "./auth.service";


export const AuthGuardService: CanActivateFn = async (
  route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  let authenticated = await authService.isAuthenticated();
  if (authenticated)
    return true;
  await router.navigate(['/']);
  return false;
}
