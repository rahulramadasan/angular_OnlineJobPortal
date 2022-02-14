import { AuthServiceService } from './../auth-service.service';
import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerdUser={email:"",password:""};

  constructor(private __auth:AuthServiceService,private router:Router) { }
  
  registerUser(){
    this.__auth.registeredUser(this.registerdUser).subscribe(
      res=>{alert("succss"),
      this.router.navigate(['/Login'])},
      //console.log(res),
      err=>console.log(err)
    )  
  }
  ngOnInit(): void {
  }

}
