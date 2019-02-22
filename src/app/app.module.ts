import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './tasks/add-task/add-task.component';
import { ViewTaskComponent } from './tasks/view-task/view-task.component';
import { EditTaskComponent } from './tasks/edit-task/edit-task.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ListTaskComponent } from './tasks/list-task/list-task.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    ViewTaskComponent,
    EditTaskComponent,
    FooterComponent,
    ListTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
