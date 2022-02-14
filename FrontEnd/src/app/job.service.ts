import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class JobService {

  private _viewJobUrl="http://localhost:8080/api/admin/view";
  private _viewSingleUserUrl="http://localhost:8080/api/admin/editjob";
  private _updateJobUrl="http://localhost:8080/api/admin/update";
  private _deleteJobUrl="http://localhost:8080/api/admin/delete";
  
  headers=new HttpHeaders().set('content-Type','application/json');
  
  constructor(private http:HttpClient) { }

  viewjob(){
    return this.http.get(this._viewJobUrl)
  } 

  viewSingleJobs(id: string | null){
    return this.http.get(this._viewSingleUserUrl+`/${id}`)
  }

  deleteJob(id: string | null){
    alert("from service:"+this._deleteJobUrl+`/${id}`)
    return this.http.delete(this._deleteJobUrl+`/${id}`)
  }

  updateJob(id: string | null, data: {
    jobid: string; jobtitle: string; jobposteddate: string;jobrole: string;jobcompany: string; jobexperience: string;
    jobsalaryrange: string; jobnoofpositions: string; joblocation: string; jobskills: string; jobqualification: string;
    jobdegree: string; jobcompanyinfo: string; jobemploymenttype: string; jobindustrytype: string; jobsearchkeyword: string;
    jobdescription: string;}){
    alert("from service"+`${data}`)
    return this.http.put(`${this._updateJobUrl}/`+id, data)
  }
}


