import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './pages/test/test.component';
import { AreasComponent } from './pages/areas/areas.component';
import { UserConfigComponent } from './pages/user-config/user-config.component';
import { ExercisesComponent } from './pages/exercises/exercises.component';

const routes: Routes = [
  { path: 'home', component: TestComponent },
  { path: 'strech-areas', component: AreasComponent },
  { path: 'config', component: UserConfigComponent },
  { path: 'exercises', component: ExercisesComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
