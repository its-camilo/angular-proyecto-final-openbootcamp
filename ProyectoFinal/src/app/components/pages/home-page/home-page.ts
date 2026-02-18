import { Component } from '@angular/core';
import { TaskForm } from "../../task-form/task-form";
import { TaskList } from "../../task-list/task-list";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [TaskForm, TaskList],
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.scss'],
})
export class HomePage {

}
