import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { ContactosComponent } from './contactos/contactos.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator'; 
import {NuevoContactoComponent} from './nuevo-contacto/nuevo-contacto.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms'; 
@NgModule({
  declarations: [
    AppComponent,
    NuevoContactoComponent,
    ContactosComponent,
    
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatListModule,
    MatCardModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [NuevoContactoComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
