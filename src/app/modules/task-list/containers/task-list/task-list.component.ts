import { Component, OnInit } from '@angular/core';
import { map, take, tap } from 'rxjs/operators';
import { TaskFilterType } from 'src/app/core/enums/task-filter-type.enum';
import { Task } from 'src/app/core/models/task.model';
import { TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  public tasks: Task[];
  public taskFilterTypeOptions: { value: number; label: string }[] = [
    {
      value: TaskFilterType.All,
      label: 'All Tasks'
    },
    {
      value: TaskFilterType.Completed,
      label: 'Completed Tasks'
    },
    {
      value: TaskFilterType.Incomplete,
      label: 'Incomplete Tasks'
    },
  ];
  public selectedTaskFilterType = TaskFilterType.All;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  public toggleTaskCompletion(taskIndex: number): void {
    this.taskService.toggleTaskCompletion(taskIndex);
  }

  public deleteTask(taskIndex: number): void {
    this.taskService.deleteTask(taskIndex);
  }

  public addTask(task: Task): void {
    this.taskService.addTask(task);
  }

  public resetTasks(): void {
    this.taskService.resetTasks();
  }

  public getFilteredTasks(): void {
    this.taskService.tasks$
      .pipe(
        take(1),
        map(tasks => this.selectedTaskFilterType == TaskFilterType.All
          ? tasks
          : tasks.filter(task =>  
              this.selectedTaskFilterType == TaskFilterType.Completed ? 
              task.completed : 
              !task.completed
            )
        ),
      )
      .subscribe(tasks => {
        this.tasks = tasks;
      })
  }

  private getTasks(): void {
    this.taskService.tasks$
      .subscribe(tasks => {
          this.tasks = tasks;
        })
  }
}
