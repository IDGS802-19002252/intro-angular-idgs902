import { Component } from "@angular/core";

@Component({
  selector: 'app-idgs',
  template: `
    <p>{{alumno.nombre}} {{alumno.apaterno}} </p>
  `,
})
export class IDGSComponent {
  alumno = {
    matricula: 1234,
    nombre: 'Juan',
    apaterno: 'Rocio',
    inscrito: true,
    fechaNac: new Date(),
    ingresos: 1500.50
  };

}