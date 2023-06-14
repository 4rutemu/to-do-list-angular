import { Injectable } from '@angular/core';

export const STATUSES = {
  COMMON: 'common',
  IMPORTANT: 'important',
  DONE: 'done'
}

export interface ITask {
  id: number;
  status: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Array<ITask> = [
    {
      id: 0,
      status: STATUSES.COMMON,
      name: 'Feed the cat'
    }
  ]

  constructor() { }

  addTask(task: ITask) {
    this.tasks.push(task);
  }

  deleteTaskById(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  editTaskStatus(id: number, status: string) {
    this.tasks.find(task => task.id === id).status = status;
  }
}
