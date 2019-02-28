import { Component, OnInit } from '@angular/core';
import { TaskDetail} from 'src/app/models/task-detail';
import{ TaskService} from 'src/app/services/task.service';
import * as $ from 'jquery';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styles: []
})
export class ViewTaskComponent implements OnInit {

   tasks: TaskDetail[];
   search:any={};
  constructor(private taskService:TaskService,private router:Router) { }

  ngOnInit() {
    this.taskService.getTasks()
         .subscribe( (resp) =>{
          this.tasks = resp;
          });
  }
  editTask(taskId:string){
    this.router.navigate(['update/'+ taskId] );
  }

  endTask(task){
    this.taskService.endTask(task)
    .subscribe(resp =>{
      this.tasks = resp;
    });
    
  }

  deleteTask(taskId:string){
    this.taskService.deleteTask(taskId)
    .subscribe(resp =>{
      //this.router.navigate(['view']);
      this.tasks = resp;
    });
  }
  
  
}
