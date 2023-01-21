import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text: string = "";   //Para recibir los valores que vienen en 
  @Input() color: string = "";  //los atributos que pusimos en header.component html
  @Output() btnClick = new EventEmitter(); //Emitimos hacia afuera del componente una acción
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.btnClick.emit(); //Para sacar este evento afuera
  }

}
