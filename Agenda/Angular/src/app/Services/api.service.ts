import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {ModContactos,ModNuevoContacto} from '../interfaces/ModContactos'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = "http://localhost:62924";
  private contacto=this.url+"/api/Contactos";
  private httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};
  constructor(private http: HttpClient) { }
  GetContactos(): Observable<ModContactos[]> {
    return this.http.get<ModContactos[]>(this.contacto);
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
}
