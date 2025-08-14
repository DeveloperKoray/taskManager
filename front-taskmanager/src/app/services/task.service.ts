import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../common/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseUrl = 'http://localhost:8080/api/tasks';

  constructor(private httpClient: HttpClient) { 
  }

  getTasks(): Observable<Task[]>{
    return this.httpClient.get<Task[]>(this.baseUrl);
  }

  createTask(task: Task): Observable<Task>{
    return this.httpClient.post<Task>(this.baseUrl, task);
  }

  updateTask(task: Task): Observable<Task>{
    var url = this.baseUrl + `/${task.id}`;
    return this.httpClient.put<Task>(url, task);
  }

  deleteTask(taskId: number): Observable<void>{
    var url = this.baseUrl + `/${taskId}`;
    return this.httpClient.delete<void>(url);
  }
}
