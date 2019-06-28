import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: './user-list/user-list.module#UserListModule'
      },
      {
        path: 'create',
        loadChildren: './user-registration/user-registration.module#UserRegistrationModule'
      },
      {
        path: 'edit/:id',
        loadChildren: './user-registration/user-registration.module#UserRegistrationModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
