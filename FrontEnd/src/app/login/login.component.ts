import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginUser={email:"",password:""};

  constructor(private __auth:AuthServiceService,private router:Router) { }
  loginuser(){
    this.__auth.loginuser(this.loginUser).subscribe(
      res=>{alert("success"),
      this.router.navigate(['/joblist'])},
        //console.log(res),
      err=>console.log(err)
    )
  }
  ngOnInit(): void {
  }
}
