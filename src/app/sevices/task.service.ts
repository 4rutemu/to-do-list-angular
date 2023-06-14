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
      status: STATUSES.IMPORTANT,
      name: 'Feed the cat'
    },
    {
      id: 1,
      status: STATUSES.COMMON,
      name: 'Kill the ogres'
    }
  ]

  constructor() { }

  addTask(task: ITask) {
    this.tasks.push(task);
  }

  deleteTaskById = (id: number): void =>{
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  editTaskStatus = (obj: {id: number, status: string}) => {
    this.tasks.find(task => task.id === obj.id)!.status = obj.status;
  }
}
