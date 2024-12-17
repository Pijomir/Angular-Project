import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Watch } from '../types/watch';

@Injectable({
  providedIn: 'root'
})
export class WatchService {
  constructor(private http: HttpClient) { };

  getWatches() {
    return this.http.get<Watch[]>(`/catalog/`);
  }

  createWatches(name: string, description: string, image: string) {
    const payLoad = { name, description, image };
    return this.http.post<Watch>(`/catalog/`, payLoad);
  }
}

