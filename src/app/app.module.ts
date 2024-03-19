import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentunoComponent } from './components/componentuno/componentuno.component';
import { ComponentdueComponent } from './components/componentdue/componentdue.component';
import { ComponenttreComponent } from './components/componenttre/componenttre.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentunoComponent,
    ComponentdueComponent,
    ComponenttreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
