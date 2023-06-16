import { Component } from '@angular/core';
import { IAlumnosIric } from '../alumnos-iric';

@Component({
  selector: 'app-iric',
  templateUrl: './iric.component.html',
  styleUrls: ['./iric.component.css']
})
export class IricComponent {
  alumnosIric: IAlumnosIric[] = [
    {
      matricula: 1234,
      nombre: 'Juan',
      edad: 23,
      correo: 'juan@juan.com',
      foto: 'https://png.pngtree.com/element_our/20200610/ourmid/pngtree-character-default-avatar-image_2237203.jpg'
    },
    {
      matricula: 5465,
      nombre: 'Felipe',
      edad: 24,
      correo: 'felipe@correo.com',
      foto: 'https://png.pngtree.com/element_our/20200610/ourmid/pngtree-character-default-avatar-image_2237203.jpg'
    },
    {
      matricula: 3452,
      nombre: 'Romero',
      edad: 25,
      correo: 'romero@jotmeil.com',
      foto: 'https://png.pngtree.com/element_our/20200610/ourmid/pngtree-character-default-avatar-image_2237203.jpg'
    }
  ];

  imageWidth: number = 50;
  imageMargin: number = 2;
  muestraImg: boolean = true;
  listFilter: string = '';

  showImage(): void {
    this.muestraImg = !this.muestraImg;
  }

}
