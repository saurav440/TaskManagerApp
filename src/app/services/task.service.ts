import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { map } from 'rxjs/Operators';

import { TaskDetail } from 'src/app/models/task-detail';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: Http) { }
  baseUrl: string = 'http://localhost/TaskManagerService/api/';

  getTasks() {
    return this.http.get(this.baseUrl + 'GetAll')
      .pipe(map((response) => {
        return response.json();
      })
      );

  }

  addTask(task: TaskDetail) {
    return this.http.post(this.baseUrl + 'AddTask', task)
      .pipe(map((response) => {
        return response.json();
      })
      );
  }
  getTaskById(id) {
    return this.http.get(this.baseUrl + 'GetTask/' + id)
      .pipe(map((response) => {
        console.log(response);
        return response.json();
      })
      );
  }

  updateTask(task: TaskDetail) {
    return this.http.put(this.baseUrl + '/UpdateTask', task)
      .pipe(map((response) => {
        return response;
      })
      );
  }
  endTask(id: string) {
    return this.http.get(this.baseUrl + 'EndTask/' + id)
    .pipe(map((response) => {
      console.log(response);
      return response;
    })
    );
  }
  deleteTask(id: string) {
    return this.http.delete(this.baseUrl + 'EndTask/' + id)
    .pipe(map((response) => {
      console.log(response)
      return response;
    })
    );
  }

}
