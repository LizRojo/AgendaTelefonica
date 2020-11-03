import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {ModContactos,ModNuevoContacto} from '../interfaces/ModContactos'
import { Observable } from 'rxjs';
import {ModLogin,IUsuario} from '../interfaces/modUsuario';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = "http://localhost:62924";
  private contacto=this.url+"/api/Contactos";
  private usuario=this.url+"/api/Usuario";
  private httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};
  constructor(private http: HttpClient) { }
GetContactos(id): Observable<ModContactos[]> {
    return this.http.get<ModContactos[]>(this.contacto+'/'+id);
}
PostNuevoContacto(contacto: ModNuevoContacto) {
  return this.http.post(this.contacto, JSON.stringify(contacto), this.httpOptions).toPromise();
}
UpdateContacto(id,form) {
  return this.http.put(this.contacto+"/"+ id, JSON.stringify(form), this.httpOptions);
}
deleteContacto(id) {
  return this.http.delete(this.contacto+"/"+id );
}

GetUsuario(usuario: ModLogin ) {
  return this.http.post<IUsuario>(this.usuario, JSON.stringify(usuario), this.httpOptions);
}
idUser:Number;
user(idUser){
this.idUser=idUser;
}
NuevoUsuario(usuario: IUsuario ) {
  return this.http.post<IUsuario>(this.usuario+"/nuevoUsuario", JSON.stringify(usuario), this.httpOptions);
}
}
