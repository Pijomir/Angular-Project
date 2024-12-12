import { Injectable } from '@angular/core';
import { UserForAuth } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: UserForAuth | null = null;

  get isLogged(): boolean {
    // return !!this.user
    return true
  }

  constructor() { }
}
