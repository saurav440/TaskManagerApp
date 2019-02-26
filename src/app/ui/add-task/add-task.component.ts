import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { TaskDetail } from 'src/app/models/task-detail';
import { TaskService } from 'src/app/services/task.service';



@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styles: []
})
export class AddTaskComponent implements OnInit {

  model: TaskDetail = {
    taskId: '',
    taskName:'',
    parentTaskId:'',
    priority:3,
    startDate: '',
    endDate:''
  };
  parentTasks: any[];
  
  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit() {
    this.taskService.getTasks()
      .subscribe((resp) => {
        this.parentTasks = resp;
      });
    
  }

  onSubmitAddTask() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))

    this.taskService.addTask(this.model)
      .subscribe(response => {
        console.log(response);
       // this.status = "records created successpully"
        this.router.navigate(['view']);
      });
  }
  resetTask(){
    this.model.priority= 3;
  }
}

