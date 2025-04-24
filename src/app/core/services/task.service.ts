import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Task } from '../models/task.model';
import { TASK_LIST_MOCK } from '../mocks/task.mock';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public tasks = new BehaviorSubject(
    this.getTasks()
  );
  public tasks$ = this.tasks.asObservable()
    .pipe(
      tap(taskList => localStorage.setItem('tasks', JSON.stringify(taskList)))
    );

  constructor() {}

  public getTasks(): Task[] {
    const tasks: Task[] = JSON.parse(localStorage.getItem('tasks'));

    return tasks?.length >= 0
      ? tasks
      : TASK_LIST_MOCK;
  }

  public addTask(task: Task): void {
    const tasks = this.getTasks();
    tasks.unshift(task);
    this.tasks.next(tasks);
  }

  public deleteTask(taskIndex: number): void {
    const tasks = this.getTasks();
    tasks.splice(taskIndex, 1);
    this.tasks.next(tasks);
  }

  public toggleTaskCompletion(taskIndex: number): void {
    const tasks = this.getTasks();
    const currentValue = tasks[taskIndex].completed;
    tasks[taskIndex].completed = !currentValue;
    this.tasks.next(tasks);
  }

  public resetTasks(): void {
    localStorage.clear();
    this.tasks.next(this.getTasks());
  }
}
