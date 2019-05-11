import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectsConfigRoutingModule } from './subjects-config-routing.module';
import { SubjectsConfigComponent } from './subjects-config.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [SubjectsConfigComponent],
  imports: [
    CommonModule,
    SubjectsConfigRoutingModule,
    SharedModule
  ]
})
export class SubjectsConfigModule { }
