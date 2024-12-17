import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { BehaviorSubject, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user$$ = new BehaviorSubject<User | null>(null);
  private user$ = this.user$$.asObservable();

  USER_KEY = '[user]';
  user: User | null = null;

  get isLogged(): boolean {
    return !!this.user
  }

  constructor(private http: HttpClient) {
    this.user$.subscribe((user) => {
      this.user = user;
    });
  }

  login(email: string, password: string) {
    return this.http.post<User>('/users/login', {email, password}).pipe(tap(user => this.user$$.next(user)));
  }

  register(username: string, email: string, password: string, rePassword: string) {
    return this.http.post<User>('/users/register', { username, email, password, rePassword }).pipe(tap(user => this.user$$.next(user)));
  }

  logout() {
    return this.http.post('/users/logout', {}).pipe(tap(user => this.user$$.next(null)));
  }
}
