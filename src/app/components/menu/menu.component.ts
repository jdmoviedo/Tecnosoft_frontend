import { Component, OnInit } from '@angular/core';
import { AuthService  } from '../../services/auth.service';
import {Router} from '@angular/router'


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu = []
  grupo = {}
  agregar = {}
  obtgrupos = []
  allgrupos = []


  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    this.authService.getMenu()
    .subscribe(
      res => {
        console.log(res);
        this.menu = res;
      },
      err => console.log(err)
    )
    this.authService.getObtGrupos()
    .subscribe(
      res => {
        console.log(res);
        this.obtgrupos = res;
      },
      err => console.log(err)
    )
    this.authService.getAllGrupos()
    .subscribe(
      res => {
        this.allgrupos = res;
        console.log(res);
      },
      err => console.log(err)
    )
  }

  
  crearGrupo(){
    console.log(this.grupo);
    this.authService.crearGrupo(this.grupo)
    .subscribe(
      res => {
        document.getElementById("cerrarcrear").click();
        console.log(res);
        location.reload();
      },
      err => console.log(err)
    )
  }

  agregarGrupo(){
    this.authService.agregarGrupo(this.agregar)
    .subscribe(
      res => {
        document.getElementById("cerraragregar").click();
        console.log(res);
        location.reload();
      },
      err => console.log(err)
    )
  }

}
