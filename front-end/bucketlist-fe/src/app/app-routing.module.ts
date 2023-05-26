import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { AdminComponent } from './features/admin/admin.component';
import { UserComponent } from './features/user/user.component';
import { OnedestinationComponent } from './features/admin/getOneDestination/onedestination/onedestination.component';
import { AddDestinationComponent } from './features/admin/addDestination/add-destination/add-destination.component';
import { CreateComponent } from './features/users/create/create.component';
import { ModifyAccountComponent } from './features/users/modify-account/modify-account.component';
import { DeleteAccountComponent } from './features/users/delete-account/delete-account.component';
import { AddAlreadyExistingComponent } from './features/users/add-already-existing/add-already-existing.component';
import { DeleteDestinationPrivateComponent } from './features/users/delete-destination-private/delete-destination-private.component';

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
    path: "create",
    component: CreateComponent
  },
  {
    path: "user/modify",
    component: ModifyAccountComponent
  },
  {
    path: "user/delete",
    component: DeleteAccountComponent
  },
  {
    path: "destination/addExisting/:id",
    component: AddAlreadyExistingComponent
  },
  {
    path: "destination/delete/:id",
    component: DeleteDestinationPrivateComponent
  },
  {
    path: "destination/:id",
    component: OnedestinationComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
