import { Component, OnInit,Input} from '@angular/core';
import {ApiService} from '../Services/api.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import{ModLogin,IUsuario} from '../interfaces/modUsuario';
import { Router } from '@angular/router';
import{NuevoUsuarioComponent} from '../nuevo-usuario/nuevo-usuario.component'
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  datosUsuario:ModLogin={user:"",pass:""};
  usuario:IUsuario;
  mensaje:string;
  mensajeErr:boolean=false;
  usuarioId: IUsuario;
  nuevoDialogRefSubscription:Subscription;
  constructor(public _aS: ApiService,public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
  }
  login(usuario){
    this._aS.GetUsuario(usuario).subscribe(data=>{
      if(data!=null){
        this.usuario=data;
        this.usuarioId=this.usuario;
      }else{
        this.mensajeErr=true;
        this.mensaje="Usuario y/o contraseña incorrectos."
      }
    },err=>{
      this.mensajeErr=true;
      this.mensaje="Ocurrio un error al ingresar."
    })
  }
  Nuevo() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(NuevoUsuarioComponent, dialogConfig);
    this.nuevoDialogRefSubscription = dialogRef.afterClosed().subscribe(result => {
      this.nuevoDialogRefSubscription.unsubscribe();
    });
  }
  cerrar(){
    this.mensajeErr=false;
  }
}
