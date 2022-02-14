import { AuthServiceService } from './../auth-service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {

  addjobdetails={
    jobid:"",
    jobtitle:"",
    jobposteddate:"",
    jobrole:"",
    jobcompany:"",
    jobexperience:"",
    jobsalaryrange:"",
    jobnoofpositions:"",
    joblocation:"",
    jobskills:"",
    jobqualification:"",
    jobdegree:"",
    jobcompanyinfo:"",
    jobemploymenttype:"",
    jobindustrytype:"",
    jobsearchkeyword:"",
    jobdescription:""
  }
  
  constructor( private __auth:AuthServiceService,private router:Router) { }

  addjob(){
    this.__auth.addjob(this.addjobdetails).subscribe(
      res=>//console.log(res),
      this.router.navigate(['/joblist']),
      err=>console.log(err)
    )
  }

  ngOnInit(): void {
  }

}
