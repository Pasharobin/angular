import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  form: FormGroup;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.form = new FormGroup({
      task: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
      this.appService.addTask(this.form.get('task').value, this.form.get('date').value);
      this.form.reset();
  }
}
