import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { inject } from '@angular/core';
import { ErrorMsgService } from './error-msg/error-msg.service';
import { Router } from '@angular/router';
import { environment } from '../environments/environments';

const { apiUrl } = environment;
const API = '/';

export const appInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.startsWith(API)) {
    const token = JSON.parse(localStorage.getItem('user') || '{}')?.accessToken;

    const headers = token
      ? req.headers.set('Authorization', `Bearer ${token}`)
      : req.headers;

    req = req.clone({
      url: req.url.replace(API, apiUrl),
      withCredentials: true,
      headers
    });
  }

  const errorMsgService = inject(ErrorMsgService);
  const router = inject(Router);

  return next(req).pipe(
    catchError((err) => {
      if (err.status === 401) {
        router.navigate(['/login']);
      } else if (err.status === 403) {
        localStorage.removeItem('user');
      } else {
        errorMsgService.setError(err);
      }


      return throwError(() => err);
    })
  );
};
