import {ApiService} from '../Services/api.service';
import {ModContactos} from '../interfaces/ModContactos'
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild,Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import {NuevoContactoComponent} from '../nuevo-contacto/nuevo-contacto.component';
import{IUsuario} from '../interfaces/modUsuario';
@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @Input() idUsuario: IUsuario;
  constructor(public _aS: ApiService,public dialog: MatDialog) { }
  contactoDetalle: ModContactos={Nombre:"",ApellidoP:"",ApellidoM:"",Telefono:"",Email:"",Direccion:"",userId:0,Alias:"",IdContacto:0};
  listaContactos: ModContactos[] = [];
  nuevoDialogRefSubscription: Subscription;
  openDialogSubscription: Subscription;
  cargando:boolean=true;
  salir:boolean=false;
  columnas: string[] = ['Nombre', 'apellidop', 'apellidom', 'telefono', 'editar', 'eliminar','ver'];
  Contactos = new MatTableDataSource(this.listaContactos);
  ngOnInit() {this.idUsuario
    this.salir=false;
    this._aS.user(this.idUsuario.idUsuario);
    this.cargando=true;
    this.cargarContactos(this.idUsuario.idUsuario);
  }
  
  cargarContactos(idUsuario){
    this._aS.GetContactos(idUsuario).subscribe(data=>{
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
    this.contactoDetalle.userId=this.idUsuario.idUsuario;
    this.OpenDialog(this.contactoDetalle, 'create');
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
      this.cargarContactos(this.idUsuario);
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
      this.cargarContactos(this.idUsuario);     
      this.openDialogSubscription.unsubscribe();
    });
  }
  Salir(){
  this.salir=true;
  }
}
