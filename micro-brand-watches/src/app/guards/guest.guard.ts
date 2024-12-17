import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { UserService } from "../user/user.service";

export const guestGuard: CanActivateFn = () => {
    const userService = inject(UserService);
    const router = inject(Router);
    const isLogged = userService.isLogged;
    if (isLogged) {
        router.navigate(['/home']);
        return false;
    }
    return true;
}