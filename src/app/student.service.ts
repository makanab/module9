import { Injectable } from '@angular/core';
import {HttpClient ,HttpHeaders} from '@angular/common/http';

const httpOptons  = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

   

 getStudents(){
   return this.http.get('http://localhost:8000/students');
 }

 addStudents(firsName:string,lastName:string){
  return this.http.post('http://localhost:8000/students',{firsName,lastName}).subscribe(
  responseData=> {
    console.log(responseData);
  }
  )  ;

 }



}
