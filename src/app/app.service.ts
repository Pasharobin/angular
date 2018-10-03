import { Task } from './task.model';


export class AppService {
    tasks:Task[] = [];

    addTask(t: string, d: string) {
        let task: Task = new Task(t, d);
        this.tasks.push(task);
    }

    toggle(i: number) {
        this.tasks[i].complete = !this.tasks[i].complete;
    }

    deleteTask(i: number) {
        this.tasks.splice(i, 1);
    }
}
