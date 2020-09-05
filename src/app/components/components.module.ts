import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { FormComponent } from './form/form.component';
import { CalendarConfigComponent } from './calendar-config/calendar-config.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FormComponent,
    CalendarConfigComponent
  ],
  exports: [
    NavbarComponent,
    FormComponent,
    CalendarConfigComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
