// Angular Moudles
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Custom Modules
import { PredefinedModule } from './modules/predefined/predefined.module';
import { CustomModule } from './modules/custom/custom.module';
import { ReusableBootstrapFormComponent } from './components/reusable-bootstrap-form/reusable-bootstrap-form.component';

@NgModule({
  imports: [
    CommonModule,
    CustomModule,
    PredefinedModule
  ],
  exports: [
    CustomModule,
    PredefinedModule
  ],
  declarations: [ReusableBootstrapFormComponent]
})

// Import this Module in all submodules for reusablility
export class SharedModule { }
