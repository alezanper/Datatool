import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { checker } from './checker.model';
import { CheckerService } from './checkerservice.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
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

  constructor(private checkerService: CheckerService, public dialog: MatDialog) { }

  ngOnInit() {
    this.checkerSelected = this.checkerService.getChecker(1);
    this.checkData();
  }

  setChecker(checkerType: string){
    switch(checkerType){
      case "email": this.checkerSelected = this.checkerService.getChecker(0);  break;
      case "phone": this.checkerSelected = this.checkerService.getChecker(1);  break;
      default: break;
    }
    this.checkData();
  }

  checkData(){
    this.checkForm = new FormGroup({
      'email': new FormControl(null, [Validators.pattern(this.checkerSelected.getPattern())])
    });
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