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
  baseUrl: string = 'http://localhost/TaskManagerService1/api/';

  // Get the all task list
  getTasks() {
    return this.http.get(this.baseUrl + 'GetAll')
      .pipe(map((response) => {
        console.log(response)
        return response.json();
      })
      );
  }

//create new task 
  addTask(task: any) {
    console.log(task)
    return this.http.post(this.baseUrl + 'AddTask', task)
      .pipe(map((response) => {
        return response;
      })
      );
  }
  //get task detail by task id
  getTaskById(id) {
    return this.http.get(this.baseUrl + 'GetTask/' + id)
      .pipe(map((response) => {
        console.log(response);
        return response.json();
      })
      );
  }
// update the task details
  updateTask(task: any) {
    return this.http.put(this.baseUrl + 'Update', task)
      .pipe(map((response) => {
        return response;
      })
      );
  }
  //end the task 
  endTask(task:any) {
    return this.http.put(this.baseUrl + 'EndTask',task)
      .pipe(map((response) => {
        console.log(response);
        return response.json();
      })
      );
  }
  //delete the task
  deleteTask(id: string) {
    return this.http.delete(this.baseUrl + 'DeleteTask/' + id)
      .pipe(map((response) => {
        console.log(response)
        return response.json();
      })
      );
  }

}
