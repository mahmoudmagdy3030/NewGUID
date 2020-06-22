import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';
import { LoginService } from './Services/login.service';
import { AddEditEmployeeComponent } from './Components/add-edit-employee/add-edit-employee.component';
import { RegisterComponent } from './Components/register/register.component';


const routes: Routes = [
  {path:'' , pathMatch:'full' , redirectTo:"login"},
  {path: 'login' , component:LoginComponent },
  {path: 'addemp' , component:AddEditEmployeeComponent },
  {path: 'register' , component:RegisterComponent },
  {path: 'addemp/:empid' , component:AddEditEmployeeComponent },
  {path: 'list' , component:EmployeeListComponent , canActivate:[LoginService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
