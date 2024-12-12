import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { UserService } from "../user/user.service";

export const AuthGuard: CanActivateFn = () => {
    const userService = inject(UserService);
    const router = inject(Router);

    if (userService.isLogged) {
        return true;
    } else {
        router.navigate(['/home']);
        return false;
    }
}  