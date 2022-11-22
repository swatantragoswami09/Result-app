import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../interfaces/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  apiUril = 'http://localhost:3000/students';

  constructor(private http: HttpClient) {}

  all(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUril);
  }
  create(data: any): Observable<Student[]> {
    return this.http.post<Student[]>(this.apiUril, data);
  }
  get(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.apiUril}/${id}`);
  }
  update(id: number, data: any): Observable<Student> {
    return this.http.put<Student>(`${this.apiUril}/${id}`, data);
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUril}/${id}`);
  }
}
