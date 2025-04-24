import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './containers/task-list/task-list.component';
import { TaskCreationBoxComponent } from './components/task-creation-box/task-creation-box.component';
import { TaskListRoutingModule } from './task-list-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TaskListComponent, TaskCreationBoxComponent],
  imports: [
    CommonModule,
    TaskListRoutingModule,
    FormsModule
  ]
})
export class TaskListModule { }
