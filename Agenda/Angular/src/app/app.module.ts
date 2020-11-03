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
import {MatProgressSpinnerModule} from '@angular/material';
import { UsuarioComponent } from './usuario/usuario.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    NuevoContactoComponent,
    ContactosComponent,
    UsuarioComponent,
    
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
    FormsModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  entryComponents: [NuevoContactoComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
