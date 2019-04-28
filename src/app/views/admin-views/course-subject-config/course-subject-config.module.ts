import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseSubjectConfigRoutingModule } from './course-subject-config-routing.module';
import { CourseSubjectConfigComponent } from './course-subject-config.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [CourseSubjectConfigComponent],
  imports: [
    CommonModule,
    CourseSubjectConfigRoutingModule,
    SharedModule
  ]
})
export class CourseSubjectConfigModule { }
