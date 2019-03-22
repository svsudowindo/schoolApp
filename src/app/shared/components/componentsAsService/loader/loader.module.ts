import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader.component';

@NgModule({
  declarations: [LoaderComponent],
  imports: [
    CommonModule
  ],
  entryComponents: [LoaderComponent]
})
export class LoaderModule { }
