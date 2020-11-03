import { Component, OnInit } from '@angular/core';
import {IUsuario} from '../interfaces/modUsuario';
import { MatDialogRef } from "@angular/material";
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {
  mensajeErr:boolean=false;
  mensaje:string;
  datosUsuario:IUsuario={nombre:"",apellidoP:"",apellidoM:"",usuario1:"",password:"",telefono:"",idUsuario:0}
  constructor(private dialogRef: MatDialogRef<NuevoUsuarioComponent>,private _aS: ApiService) { }

  ngOnInit() {
  }
  Cerrar() {
    this.dialogRef.close();
  }
  Enviar(){
    console.log(this.datosUsuario)
  if(this.datosUsuario.nombre!=""&&this.datosUsuario.apellidoP!=""&&
    this.datosUsuario.apellidoM!=""&&this.datosUsuario.usuario1!=""&&
    this.datosUsuario.password!=""&&this.datosUsuario.telefono!=""){
      this._aS.NuevoUsuario(this.datosUsuario).subscribe(data=>{
        this.dialogRef.close();
  
      },err=>{
        this.mensajeErr=true;
        this.mensaje="No se pudo agregar el nuevo usuario.";
        setTimeout(()=>{
          this.cerrar();
        },3000)
      })
    }else{
      this.mensajeErr=true;
        this.mensaje="Favor de llenar todos los campos.";
        setTimeout(()=>{
          this.cerrar();
        },3000)
    }
    
  }
  cerrar(){
    this.mensajeErr=false;
  }
}
