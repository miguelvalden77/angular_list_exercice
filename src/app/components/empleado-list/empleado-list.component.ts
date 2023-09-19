import { Component } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent {

  empleados: Empleado[] = [
    { nombre: "Miguel Angel", apellido: "Martin", sexo: "Hombre", salario: 19000, telefono: 645667781 },
    { nombre: "Alba", apellido: "Hernandez", sexo: "Mujer", salario: 23000, telefono: 609917801 },
    { nombre: "Martina", apellido: "Rodriguez", sexo: "Mujer", salario: 39000, telefono: 691993259 },
    { nombre: "Lucas", apellido: "Saenz", sexo: "Hombre", salario: 27000, telefono: 677345185 }
  ]

  sexoSelected!: string

  getSexo(sexo: string) {
    return this.empleados.filter(empleado => empleado.sexo == sexo).length
  }

  updateSexo(sexo: string) {
    this.sexoSelected = sexo
  }

}
