import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/core/models/task.model';

@Component({
  selector: 'app-task-creation-box',
  templateUrl: './task-creation-box.component.html',
  styleUrls: ['./task-creation-box.component.scss']
})
export class TaskCreationBoxComponent {
  @Output() create = new EventEmitter<Task>();

  public taskName = '';

  constructor() { }

  public createTask(): void {
    this.create.emit({ name: this.taskName, completed: false });
    this.taskName = '';
  }
}
