import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseSubjectConfigComponent } from './course-subject-config.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CourseSubjectConfigComponent
      },
      {
        path: 'edit/:id',
        component: CourseSubjectConfigComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseSubjectConfigRoutingModule { }
