import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  usuario={
    name:'',
    email: '',
    password:'',
    confirm_password:''    
    }

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }
  
  ngOnInit() {
  }

  signUp(){
    this.authService.signUp(this.usuario)
    .subscribe(
    res => {
      console.log(res.token)
      localStorage.setItem('token',res.token);
      this.router.navigate(['/menu']);
    },
    err => console.log(err)
  )
  }

}
