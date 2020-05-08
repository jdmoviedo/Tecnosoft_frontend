import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  usuario ={}

  
  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  signIn(){
    this.authService.signIn(this.usuario)
    .subscribe(
    res => {
      localStorage.setItem('token',res.token);
      this.router.navigate(['/menu']);
    },
    err => console.log(err)
  )
  }

}
