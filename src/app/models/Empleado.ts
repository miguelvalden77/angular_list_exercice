type sexo = "Hombre" | "Mujer"

export class Empleado {

    telefono: number;
    nombre: string;
    apellido: string;
    sexo: sexo;
    salario: number;

    constructor(tel: number, nom: string, apell: string, sex: sexo, sal: number) {

        this.telefono = tel
        this.nombre = nom
        this.apellido = apell
        this.sexo = sex
        this.salario = sal
    }
}