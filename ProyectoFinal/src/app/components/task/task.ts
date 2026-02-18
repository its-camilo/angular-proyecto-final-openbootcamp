import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask } from '../../models/interfaces/Task.interface';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})

export class Task implements OnInit {
  @Input() task: ITask | undefined;
  @Output() delete: EventEmitter<ITask> = new EventEmitter<ITask>();

  constructor() {}

  ngOnInit(): void {
    //
  }

  deleteTask(): void {
    this.delete.emit(this.task);
  }
}
