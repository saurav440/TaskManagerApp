import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddTaskComponent} from 'src/app/ui/add-task/add-task.component';
import {ViewTaskComponent} from 'src/app/ui/view-task/view-task.component';
import {EditTaskComponent} from 'src/app/ui/edit-task/edit-task.component';

const routes: Routes = [
  { path: '',redirectTo: "/view", pathMatch: 'full'},
  { path:'view',component:ViewTaskComponent},
  { path:'add', component: AddTaskComponent},
  { path:'update/:id' ,component: EditTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
