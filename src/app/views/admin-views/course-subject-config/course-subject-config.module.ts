import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseSubjectConfigRoutingModule } from './course-subject-config-routing.module';
import { CourseSubjectConfigComponent } from './course-subject-config.component';

@NgModule({
  declarations: [CourseSubjectConfigComponent],
  imports: [
    CommonModule,
    CourseSubjectConfigRoutingModule
  ]
})
export class CourseSubjectConfigModule { }
