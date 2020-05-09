import { Component, OnInit } from '@angular/core';
import { AuthService  } from '../../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu = []

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getMenu()
    .subscribe(
      res => {
        console.log(res)
        this.menu = res;
      },
      err => console.log(err)
    )
  }

}
