import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubjectsConfigComponent } from './subjects-config.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/404',
    pathMatch: 'full'
  },
  {
    path: '',
    children: [
      {
        path: ':id',
        component: SubjectsConfigComponent
      },
      {
        path: 'edit/:id/:subjectId/:yearId',
        component: SubjectsConfigComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class SubjectsConfigRoutingModule { }
