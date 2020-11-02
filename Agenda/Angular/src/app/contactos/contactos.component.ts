import {ApiService} from '../Services/api.service';
import {ModContactos} from '../interfaces/ModContactos'
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import {NuevoContactoComponent} from '../nuevo-contacto/nuevo-contacto.component'
@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  constructor(public _aS: ApiService,public dialog: MatDialog) { }
  contactoDetalle: ModContactos;
  listaContactos: ModContactos[] = [];
  nuevoDialogRefSubscription: Subscription;
  openDialogSubscription: Subscription;
  cargando:boolean=true;
  columnas: string[] = ['Nombre', 'apellidop', 'apellidom', 'telefono', 'editar', 'eliminar','ver'];
  Contactos = new MatTableDataSource(this.listaContactos);
  ngOnInit() {
    this.cargando=true;
    this.cargarContactos();
  }
  
  cargarContactos(){
    this._aS.GetContactos().subscribe(data=>{
      this.listaContactos=data;
      setTimeout(() => {
        this.listaContactos = JSON.parse(JSON.stringify(data));
        this.Contactos.data = this.listaContactos;
        this.Contactos.paginator = this.paginator;
      });
    this.cargando=false;

    })

  }
  detalle(contacto:ModContactos){
  this.contactoDetalle=contacto;
  
  }
  Nuevo() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = { flag: "create" }
    const dialogRef = this.dialog.open(NuevoContactoComponent, dialogConfig);
    this.nuevoDialogRefSubscription = dialogRef.afterClosed().subscribe(result => {
      this.cargando=true;
      this.cargarContactos();
      this.nuevoDialogRefSubscription.unsubscribe();
    });
  }
  Editar(contacto: ModContactos) {
   this.contactoDetalle=contacto;
    this.OpenDialog(this.contactoDetalle, 'edit');
  }
  Ver(contacto: ModContactos) {
    this.contactoDetalle=contacto;
     this.OpenDialog(this.contactoDetalle, 'view');
   }
   Eliminar(contacto){
     this.cargando=true;
    this._aS.deleteContacto(contacto.idContacto).subscribe(data=>{
      this.cargarContactos();
    })
   }
  OpenDialog(data: ModContactos, flag: string): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      data: data,
      flag: flag
    }
    const dialogRef = this.dialog.open(NuevoContactoComponent, dialogConfig);
    this.openDialogSubscription = dialogRef.afterClosed().subscribe(result => {
      this.cargando=true;
      this.cargarContactos();      
      this.openDialogSubscription.unsubscribe();
    });
  }
}
