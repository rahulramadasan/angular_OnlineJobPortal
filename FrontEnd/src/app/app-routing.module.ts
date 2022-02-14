import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddJobComponent } from './add-job/add-job.component';
import { EditComponentComponent } from './edit-component/edit-component.component';
import { JobListComponent } from './job-list/job-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"Register",component:RegisterComponent},
  {path:"Login",component:LoginComponent},
  {path:"addjob",component:AddJobComponent},
  {path:"joblist",component:JobListComponent},
  {path:"editjob/:id",component:EditComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
