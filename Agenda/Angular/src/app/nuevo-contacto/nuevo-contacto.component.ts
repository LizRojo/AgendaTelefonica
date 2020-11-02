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
  datosContacto: ModNuevoContacto = { Nombre:"", ApellidoP: "", ApellidoM: "", Telefono: "", Email: "", Direccion: "", Alias: "" };
  flag: string = 'create';
  idContacto:number;
  constructor(private dialogRef: MatDialogRef<NuevoContactoComponent>, private _aS: ApiService,
    @Inject(MAT_DIALOG_DATA) data) {
      if (data.flag == 'edit'||data.flag == 'view') {
        console.log(data)
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

      })
    }else{
      this._aS.UpdateContacto(this.idContacto,this.datosContacto).subscribe(data=>{
        this.dialogRef.close();

      })

    }

    }
}
