import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-count-empleados',
  templateUrl: './count-empleados.component.html',
  styleUrls: ['./count-empleados.component.css']
})
export class CountEmpleadosComponent {

  @Input() data = { mujeres: 0, hombres: 0, todos: 0 };
  @Output() sexoRadio = new EventEmitter<string>();

  sexoSelected: string = "Todos"

  radioChange(): void {
    this.sexoRadio.emit(this.sexoSelected)
  }
}
