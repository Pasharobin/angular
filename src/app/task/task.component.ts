import { Component, OnInit } from '@angular/core';

import { AppService } from './../app.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks = [];

  constructor(private appService: AppService ) { }

  ngOnInit() {
    this.tasks = this.appService.tasks;
  }

  onCompleted(i: number) {
    this.appService.toggle(i);
  }

  onDelete(i: number) {
    this.appService.deleteTask(i);
  }

}
