import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { JobService } from '../job.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  title: string = "Jobs list"
  jobs = <any>[];
  constructor(private _job: JobService, private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this._job.viewjob().subscribe(
      res => this.jobs = res,
      err => console.log(err)
    )
  }

  removeJob(id: any) {
    if (window.confirm(`${id}+Are you sure?`)) {
      this._job.deleteJob(`${id}`).subscribe((data) => {
        window.alert("deleted")
        this.router.navigate(['/joblist']);
        this.jobs.splice(id, 1);
      })
    }
  }
}
