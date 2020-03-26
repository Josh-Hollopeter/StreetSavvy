import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AllstockComponent } from './allstock/allstock.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  {path:"allstock", component: AllstockComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
