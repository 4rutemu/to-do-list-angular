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

  getId = () => {
    let currentId = 4;

    return function () {
      return currentId++;
    }
  }

  idGenerator = this.getId();
  filter = {filteredName: '', filteredStatus: 'all'};

  addTask(task: {status: string, name: string}) {
    this.tasks.push({id: this.idGenerator(), status: task.status, name: task.name});
  }

  deleteTaskById = (id: number): void =>{
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  editTaskStatus = (obj: {id: number, status: string}) => {
    this.tasks.find(task => task.id === obj.id)!.status = obj.status;
  }

  filterTasks = (task: ITask) => {
    if (this.filter.filteredStatus === 'all' || this.filter.filteredStatus === '') {
      return task.name.toLowerCase().includes(this.filter.filteredName.toLowerCase());
    } else {
      return task.status === this.filter.filteredStatus
        && task.name.toLowerCase().includes(this.filter.filteredName.toLowerCase());
    }
  }
}
