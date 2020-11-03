import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import{ModNuevoContacto} from '../interfaces/ModContactos';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-nuevo-contacto',
  templateUrl: './nuevo-contacto.component.html',
  styleUrls: ['./nuevo-contacto.component.css']
})
export class NuevoContactoComponent implements OnInit {
  datosContacto: ModNuevoContacto = { Nombre:"", ApellidoP: "", ApellidoM: "", Telefono: "", Email: "", Direccion: "", Alias: "",idUsuario:0 };
  flag: string = 'create';
  idContacto:number;
  mensajeErr:boolean=false;
  mensaje:string;
  constructor(private dialogRef: MatDialogRef<NuevoContactoComponent>, private _aS: ApiService,
    @Inject(MAT_DIALOG_DATA) data) {
      console.log("dta",data)
      this.datosContacto.idUsuario=data.data.userId;
      if (data.flag == 'edit'||data.flag == 'view') {
        this.datosContacto.Nombre=data.data.nombre;
        this.datosContacto.ApellidoP=data.data.apellidoP;
        this.datosContacto.ApellidoM=data.data.apellidoM;
        this.datosContacto.Telefono=data.data.telefono;
        this.datosContacto.Direccion=data.data.direccion,
        this.datosContacto.Email=data.data.email;
        this.datosContacto.Alias=data.data.alias
        this.flag = data.flag;
        this.idContacto=data.data.idContacto;
      }
     }

  ngOnInit() {
  }
  Cerrar() {
    this.dialogRef.close();
  }
  
  Enviar() {
   
    if (this.flag == 'create') {
      console.log("entra",this.datosContacto)
      this._aS.PostNuevoContacto(this.datosContacto).then(data=>{
        this.dialogRef.close();

      },err=>{
        this.mensajeErr=true;
        this.mensaje="No se pudo agregar el nuevo contacto.";
        setTimeout(()=>{
          this.cerrar();
        },3000)
      })
    }else{
      this._aS.UpdateContacto(this.idContacto,this.datosContacto).subscribe(data=>{
        this.dialogRef.close();
      },err=>{
        this.mensajeErr=true;
        this.mensaje="No se editar el contacto.";
        setTimeout(()=>{
          this.cerrar();
        },3000)
      })

    }

    }
    cerrar(){
      this.mensajeErr=false;
    }
}
