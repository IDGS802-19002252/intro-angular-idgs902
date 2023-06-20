import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DistanciasComponent } from './distancias/distancias.component';
import { OperasModule } from '../utl/formulario/operas/operas.module';

import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DistanciasComponent
  ],
  imports: [
    CommonModule,
    OperasModule,
    FormsModule,

    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
  exports: [
    DistanciasComponent
  ]
})
export class TareaModule { }
