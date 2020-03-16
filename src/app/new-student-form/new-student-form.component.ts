import { Component, OnInit, Input } from '@angular/core';
import {NgForm} from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-new-student-form',
  templateUrl: './new-student-form.component.html',
  styleUrls: ['./new-student-form.component.css']
})
export class NewStudentFormComponent implements OnInit {

  @Input() firstName:string;
  @Input() lastName:string;

  constructor(private _myService:StudentService) { }

  ngOnInit() {
  
  }



  onSubmit(){
    console.log('you submitted:',this.firstName + " "+this.lastName);
    this._myService.addStudents(this.firstName,this.lastName);

  }


}
