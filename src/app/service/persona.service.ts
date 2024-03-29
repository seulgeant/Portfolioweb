import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  //expURL = "Http://localhost:8080/persona/";
  //expURL="https://back-portfolioweb-leg.herokuapp.com/persona/";
  expURL="https://leg-backportfolio.onrender.com/persona/";

  constructor(private httpClient: HttpClient) {
  }

  public detail(): Observable<persona> {
    return this.httpClient.get<persona>(this.expURL + 'detail');
  }

  public update(experiencia: persona): Observable<any> {
    return this.httpClient.put<any>(this.expURL + `update`, experiencia);
  }

}