import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'intro-angular-idgs902';
  alumno = {
    matricula: 1234,
    nombre: 'Juan',
    apaterno: 'Rocio',
    inscrito: true,
    fechaNac: new Date(),
    ingresos: 1500.50
  };

  duplica(numero: number): number {
    return numero * 2;
  }
}
