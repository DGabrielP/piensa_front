import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getPets(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/pets`);
  }

  createPet(pet: any): Observable<any> {
    return this.http.post<any>(`${this.url}/pets`, pet);
  }

  deletePet(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/pets/${id}`);
  }

  updatePet(id: number, pet: any): Observable<any> {
    return this.http.patch<any>(`${this.url}/pets/${id}`, pet);
  }
}
