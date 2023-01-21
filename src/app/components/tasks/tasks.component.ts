import { Component, OnInit } from '@angular/core';
import { Task } from '../Task'; //Importamos la interfaz
import { TASKS } from '../mock-tasks'; //Importamos el array

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = TASKS;
  

  constructor() { }

  ngOnInit(): void {
  }

}
