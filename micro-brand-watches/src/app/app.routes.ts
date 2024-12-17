import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AboutComponent } from './about/about/about.component';
import { InvalidPageComponent } from './error/invalid-page/invalid-page.component';
import { WatchListComponent } from './catalog/watch-list/watch-list.component';
import { CurrentWatchComponent } from './catalog/current-watch/current-watch.component';
import { guestGuard } from './guards/guest.guard';
import { userGuard } from './guards/user.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },

    { path: 'login', component: LoginComponent, canActivate: [guestGuard] },
    { path: 'register', component: RegisterComponent, canActivate: [guestGuard] },

    {
        path: 'catalog', children: [
            { path: '', component: WatchListComponent },
            {
                path: ':watchId',
                component: CurrentWatchComponent,
                canActivate: []
            }
        ]
    },
    {
        path: 'add-watch',
        canActivate: [],
        loadComponent: () => import('./catalog/add-watch/add-watch.component').then((w) => w.AddWatchComponent)
    },

    { path: 'about', component: AboutComponent },
    { path: '404', component: InvalidPageComponent },
    { path: '**', redirectTo: '/404' },

];
