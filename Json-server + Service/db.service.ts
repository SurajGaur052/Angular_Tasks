import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  dataArray:any[]=[];
  url:string  = "http://localhost:3000/emps";

  constructor(private httpObj:HttpClient) { }

  getEmployees():Observable<any[]>
  {
    return this.httpObj.get<any[]>(this.url);
  }

  getEmpById(empId:number):Observable<any>
  {
   return this.httpObj.get<any>(`${this.url}/${empId}`);
  }

  addEmp(empObj:any) : Observable<any>
  {
    return this.httpObj.post<any>(this.url, empObj);
  }
  updateEmp(empObj:any) : Observable<any>
  {
    return this.httpObj.put<any>(this.url + "/" + empObj.empId, empObj);
  }

  deleteEmp(empId:number) : Observable<any>
  {
    return this.httpObj.delete<any>(`${this.url}/${empId}`);
  }
}
