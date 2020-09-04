import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComponentsModule } from './components/components.module';

import { TestComponent } from './pages/test/test.component';
import { AreasComponent } from './pages/areas/areas.component';
import { UserConfigComponent } from './pages/user-config/user-config.component';
import { ExercisesComponent } from './pages/exercises/exercises.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    AreasComponent,
    UserConfigComponent,
    ExercisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
