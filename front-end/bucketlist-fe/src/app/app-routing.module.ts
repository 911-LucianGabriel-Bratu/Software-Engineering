import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { AdminComponent } from './features/admin/admin.component';
import { UserComponent } from './features/user/user.component';
import { OnedestinationComponent } from './features/admin/getOneDestination/onedestination/onedestination.component';
import { AddDestinationComponent } from './features/admin/addDestination/add-destination/add-destination.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "admin",
    component: AdminComponent
  },
  {
    path: "user",
    component: UserComponent
  },
  {
    path: "destination/add",
    component: AddDestinationComponent
  },
  {
    path: "destination/:id",
    component: OnedestinationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
