import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {ModContactos,ModNuevoContacto} from '../interfaces/ModContactos'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = "http://localhost:62924";
  private nuevo=this.url+"/api/Usuario";
  private httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};
  constructor(private http: HttpClient) { }
  GetContactos(): Observable<ModContactos[]> {
    return this.http.get<ModContactos[]>(this.url+"/api/Usuario");
}
PostNuevoContacto(contacto: ModNuevoContacto) {
  return this.http.post(this.nuevo, JSON.stringify(contacto), this.httpOptions).toPromise();
}
UpdateContacto(id,form) {
  return this.http.put(this.nuevo+"/"+ id, JSON.stringify(form), this.httpOptions);
}
deleteContacto(id) {
  return this.http.delete(this.nuevo+"/"+id );
}
}
