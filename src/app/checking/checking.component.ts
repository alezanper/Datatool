import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { checker } from './checker.model';
import { CheckerService } from './checkerservice.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject} from '@angular/core';

export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-checking',
  templateUrl: './checking.component.html',
  styleUrls: ['./checking.component.css']
})
export class CheckingComponent implements OnInit {

  checkForm: FormGroup;
  checkerSelected: checker;
  checked: boolean;
  regexpNumber: RegExp;
  type: string;

  enableAlphaNumeric: boolean;
  enableNumeric: boolean;
  enableDate: boolean;

  types: string[] = ["Numeric", "Alphanumeric", "Date"];

  constructor(private checkerService: CheckerService, public dialog: MatDialog) { }

  ngOnInit() {
    this.checkerSelected = this.checkerService.getChecker(1);
    this.type = "Numeric";
    this.enableNumeric = false;
    this.enableAlphaNumeric = true;
    this.enableDate = true;
  }


  setChecker(checkerType: string){
    switch(checkerType){
      case "email": this.checkerSelected = this.checkerService.getChecker(0);  break;
      case "phone": this.checkerSelected = this.checkerService.getChecker(1);  break;
      default: break;
    }
  }


  getChecker(test: checker){
    this.regexpNumber = new RegExp('^[+ 0-9]{5}$');
  }
 
  animal: string;
  name: string;

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }


  goRestriction(type: string){
    switch(type){
      case "Numeric": this.setStep(1);
        break;
      case "Alphanumeric": this.setStep(2);
        break;
      case "Date": this.setStep(3);
        break;
      default: break;
    }
  }

  goDataTypes(){
    this.setStep(0);
  }


  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }


}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}