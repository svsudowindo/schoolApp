import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseDetailsRoutingModule } from './course-details-routing.module';
import { CourseDetailsComponent } from './course-details.component';
import { SubjectsComponent } from './subjects/subjects.component';

@NgModule({
  declarations: [ CourseDetailsComponent, SubjectsComponent],
  imports: [
    CommonModule,
    CourseDetailsRoutingModule
  ]
})
export class CourseDetailsModule { }
