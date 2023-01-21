import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../Task';
import { TASKS } from '../mock-tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
  @Input() task: Task = TASKS[0]; //Creo una variable task para asignarle las tareas
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

}
