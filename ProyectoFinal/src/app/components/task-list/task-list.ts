import { Component } from '@angular/core';
import { Task } from "../task/task";
import { ITask, Levels } from '../../models/interfaces/Task.interface';
import { ListaBasica } from "../../modules/lists/lista-basica/lista-basica";

@Component({
  selector: 'app-task-list',
  imports: [Task, ListaBasica],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss',
})
export class TaskList {
  tarea1: ITask = {
    title: 'Tarea 1',
    description: 'Descripción de la tarea 1',
    completed: false,
    level: Levels.Info
  };

  tarea2: ITask = {
    title: 'Tarea 2',
    description: 'Descripción de la tarea 2',
    completed: true,
    level: Levels.Urgent
  };

  constructor() {}

  ngOnInit(): void {
    //
  }

  deleteTask(task: ITask): void {
    alert(`Tarea a eliminar: ${task.title}`);
  }
}
