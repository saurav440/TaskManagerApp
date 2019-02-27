import { Component, OnInit } from '@angular/core';
import{ TaskService} from 'src/app/services/task.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import{ TaskDetail } from 'src/app/models/task-detail';
import { Params } from '@angular/router/src/shared';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styles: []
})
export class EditTaskComponent implements OnInit {

  taskInfo :any;
  parentTasks:any[];
  taskId:string ;

  constructor(private taskService:TaskService,private router :Router,private activatedRoute :ActivatedRoute) { }

  ngOnInit() {
   // this.taskId = localStorage.getItem('editTaskId');  
    this.activatedRoute.params.subscribe((queryParms :Params) => {
      this.taskId = queryParms.id
    })
    this.taskService.getTaskById(this.taskId)
        .subscribe(data => {  
          console.log(data)
         this.taskInfo = data;
         this.taskInfo.StartDate = this.taskInfo.StartDate.substr(0,10);
         this.taskInfo.EndDate = this.taskInfo.EndDate.substr(0,10);
    })
    
    this.taskService.getTasks()
        .subscribe(data =>{this.parentTasks = data})
  }

  onSubmitUpdateTask() {
    
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.taskInfo))
    this.taskService.updateTask(this.taskInfo)
        .subscribe( response => {
          console.log(response);
          this.router.navigate(['view']);
        });
   }
   cancelTaskHandler(){
    this.router.navigate(['view']);
   }

}
