import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from '../components/Task'; //Importamos la interfaz
import { TASKS } from '../components/mock-tasks'; //Importamos el array

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    // const tasks = of(TASKS);
    //return tasks;
    return this.http.get<Task[]>(this.apiUrl);
  }
}
