import { Component, OnInit,Input} from '@angular/core';
import {ApiService} from '../Services/api.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import{ModLogin,IUsuario} from '../interfaces/modUsuario';
import { Router } from '@angular/router';

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
  usuarioId: Number;
  constructor(public _aS: ApiService,public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
  }
  login(usuario){
    this._aS.GetUsuario(usuario).subscribe(data=>{
      if(data!=null){
        this.usuario=data;
        this.usuarioId=this.usuario.idUsuario;
        console.log("  this.datoComunicar",  this.usuario)
      }else{
        this.mensajeErr=true;
        this.mensaje="Usuario y/o contraseña incorrectos."
      }
    },err=>{
      this.mensajeErr=true;
      this.mensaje="Ocurrio un error al ingresar."
    })
  }
}
