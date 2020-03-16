import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'module9';
  public students;

  constructor(private _myService:StudentService){}

  ngOnInit(){
    this.getStudets();
  }


  getStudets(){

    this._myService.getStudents().subscribe(
      res=>this.students = res,
      err=> console.log(err),
      ()=>console.log('finished loading')
    );

  }
}
