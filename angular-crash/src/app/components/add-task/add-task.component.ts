import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Task} from "../../Task";
// こんな呼び出し方が出来る
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter()
  text: string = ""
  day: string = ""
  reminder: boolean = false
  subscription: Subscription
  showAddTask: boolean = true

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe(value => this.showAddTask = value)
  }

  ngOnInit() {
  }

  onSubmit() {
    if(!this.text) {
      alert("Please input text");
      return;
    }
    if(!this.day) {
      alert("Please input day");
      return;
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask)

    this.text = ""
    this.day = ""
    this.reminder = false
  }

}
