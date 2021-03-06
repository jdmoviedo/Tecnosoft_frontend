import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:4000/api';

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }  

  signUp(user){
    return this.http.post<any>(this.URL + '/signup', user)
  }

  signIn(user){
    return this.http.post<any>(this.URL + '/signin', user)
  }

  getMenu(){
    return this.http.get<any>(this.URL + '/menu')
  }

  getObtGrupos(){
    return this.http.get<any>(this.URL + '/menu/obtgrupos')
  }

  getAllGrupos(){
    return this.http.get<any>(this.URL + '/menu/allgrupos')
  }
  
  crearGrupo(grupo){
    return this.http.post<any>(this.URL + '/menu/crear',grupo,{ responseType: 'text' as 'json' })
  }

  agregarGrupo(agregar){
    return this.http.post<any>(this.URL + '/menu/agregar',agregar,{ responseType: 'text' as 'json' })
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/signin'])
  }

}
