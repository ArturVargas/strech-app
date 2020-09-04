import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FormComponent
  ],
  exports: [
    NavbarComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
