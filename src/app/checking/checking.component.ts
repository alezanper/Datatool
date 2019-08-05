import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { checker } from './checker.model';
import { CheckerService } from './checkerservice.service';


@Component({
  selector: 'app-checking',
  templateUrl: './checking.component.html',
  styleUrls: ['./checking.component.css']
})
export class CheckingComponent implements OnInit {

  checkForm: FormGroup;
  checkerSelected: checker;

  constructor(private checkerService: CheckerService) { }

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
 

}
