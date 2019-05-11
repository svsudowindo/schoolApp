import { NgModule } from '@angular/core';

// Custom Directives
import { TrimOnBlurDirective } from '../../directives/ng-trim.directive';
import { InputTrimModule } from 'ng2-trim-directive';
import { ResponseMessageComponent } from '../../components/response-message/response-message.component';
import { CommonModule } from '@angular/common';
import { PopupModule } from '../../components/componentsAsService/popup/popup.module';
import { SearchComponent } from '../../components/search/search.component';
import { LoaderModule } from '../../components/componentsAsService/loader/loader.module';
import { LogoComponent } from '../../components/logo/logo.component';
import { ReusableAuthFormsComponent } from '../../components/reusable-auth-forms/reusable-auth-forms.component';
import { PredefinedModule } from '../predefined/predefined.module';
import { NoAcessComponent } from '../../components/no-acess/no-acess.component';

@NgModule({
  declarations: [
    TrimOnBlurDirective,
    ResponseMessageComponent,
    SearchComponent,
    LogoComponent,
    ReusableAuthFormsComponent,
    NoAcessComponent
  ],
  imports: [
    CommonModule,
    InputTrimModule,
    PopupModule,
    LoaderModule,
    PredefinedModule
  ],
  exports: [
    TrimOnBlurDirective,
    InputTrimModule,
    PopupModule,
    ResponseMessageComponent,
    SearchComponent,
    LogoComponent,
    ReusableAuthFormsComponent,
    NoAcessComponent
  ]
})
export class CustomModule { }
