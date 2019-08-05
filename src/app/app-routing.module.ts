import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StepsComponent } from './steps/steps.component';
import { CheckingComponent } from './checking/checking.component';

const appRoutes: Routes = [
  { path: '', component: CheckingComponent },
  { path: 'steps', component: StepsComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
