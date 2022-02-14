import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes, Router } from '@angular/router';
import { JobService } from '../job.service';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css']
})
export class EditComponentComponent implements OnInit {

  getjobs = {
    jobid: "",
    jobtitle: "",
    jobposteddate: "",
    jobrole: "",
    jobcompany: "",
    jobexperience: "",
    jobsalaryrange: "",
    jobnoofpositions: "",
    joblocation: "",
    jobskills: "",
    jobqualification: "",
    jobdegree: "",
    jobcompanyinfo: "",
    jobemploymenttype: "",
    jobindustrytype: "",
    jobsearchkeyword: "",
    jobdescription: ""

  }

  jobs = <any>[];


  constructor(private _jobs: JobService, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = this.actRoute.snapshot.paramMap.get('id');
    console.log(id)
    this._jobs.viewSingleJobs(id)
      .subscribe(
        res => this.jobs = res,
        //res =>{console.log(res);this.jobs=res},
        err => console.log(err)
      )
  }
  updateJob() {
    let id = this.actRoute.snapshot.paramMap.get('id');
    alert(this.jobs)
    this._jobs.updateJob(id, this.jobs)
      .subscribe(
        res => {
          //console.log(res); 
          this.router.navigate(['/joblist']);
        },
        err => console.log(err + this.jobs))
  }
}


