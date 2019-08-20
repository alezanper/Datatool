import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule, MatInputModule} from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { StepsComponent } from './steps/steps.component';
import { CheckingComponent, DialogOverviewExampleDialog } from './checking/checking.component';
import { CheckerService } from './checking/checkerservice.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/';


@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    StepsComponent,
    CheckingComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule, MatDialogModule, MatExpansionModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule
  ],
  providers: [CheckerService],
  entryComponents: [ DialogOverviewExampleDialog ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}