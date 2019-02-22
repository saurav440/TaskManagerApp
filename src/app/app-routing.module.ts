import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddTaskComponent} from 'src/app/tasks/add-task/add-task.component';
import {ViewTaskComponent} from 'src/app/tasks/view-task/view-task.component';
import {EditTaskComponent} from 'src/app/tasks/edit-task/edit-task.component';

const routes: Routes = [
  {path:'',component:ViewTaskComponent},
  {path:'addtask', component: AddTaskComponent},
  {path:'edittask/:id' ,component: EditTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
