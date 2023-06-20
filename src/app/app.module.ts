import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GruposComponent } from './utl/grupos.component';
import { IDGSComponent } from './utl/idgs902.component';
import { OtroIdgsComponent } from './utl/otro-idgs/otro-idgs.component';
import { IricComponent } from './utl/iric/iric.component';
import { MenuComponent } from './utl/menu/menu.component';
import { SumaComponent } from './utl/formulario/suma/suma.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OperasModule } from './utl/formulario/operas/operas.module';
import { FormsModule } from '@angular/forms';
import { TareaModule } from './tarea/tarea.module';


@NgModule({
  declarations: [
    AppComponent,
    GruposComponent,
    IDGSComponent,
    OtroIdgsComponent,
    IricComponent,
    MenuComponent,
    SumaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    
    OperasModule,
    TareaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
