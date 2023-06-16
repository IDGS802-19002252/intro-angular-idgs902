import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GruposComponent } from './utl/grupos.component';
import { IDGSComponent } from './utl/idgs902.component';
import { OtroIdgsComponent } from './utl/otro-idgs/otro-idgs.component';

@NgModule({
  declarations: [
    AppComponent,
    GruposComponent,
    IDGSComponent,
    OtroIdgsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
