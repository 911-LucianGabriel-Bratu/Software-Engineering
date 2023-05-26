import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/login/login.component';
import { AdminComponent } from './features/admin/admin.component';
import { UserComponent } from './features/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { OnedestinationComponent } from './features/admin/getOneDestination/onedestination/onedestination.component';
import { AddDestinationComponent } from './features/admin/addDestination/add-destination/add-destination.component';
import { CreateComponent } from './features/users/create/create.component';
import { ModifyAccountComponent } from './features/users/modify-account/modify-account.component';
import { DeleteAccountComponent } from './features/users/delete-account/delete-account.component';
import { AddAlreadyExistingComponent } from './features/users/add-already-existing/add-already-existing.component';
import { DeleteDestinationPrivateComponent } from './features/users/delete-destination-private/delete-destination-private.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    UserComponent,
    OnedestinationComponent,
    AddDestinationComponent,
    CreateComponent,
    ModifyAccountComponent,
    DeleteAccountComponent,
    AddAlreadyExistingComponent,
    DeleteDestinationPrivateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
