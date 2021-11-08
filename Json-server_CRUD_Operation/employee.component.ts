import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  isDisabled :boolean = false;
  empId:number=0;
  empName:string="";
  job:string="";
  sal:number=0;

  url:string="http://localhost:3000/emps"
     
 public empsArray:any[]=[];

     

     constructor(private httpObj:HttpClient)
     {

      }

     btn_Get_Emp(): void
     {
       
      this.httpObj.get<any[]>(this.url).subscribe( (response:any[]) =>{
        this.empsArray = response;
       });
     }


     select_click(empId:number)
     {
       this.httpObj.get(this.url+"/"+ empId).subscribe((response:any)=>{
          let empObj= response;
          this.empId=empObj.empId;
          this.empName=empObj.empName;
          this.sal=empObj.sal;
          this.job=empObj.job;
          this.isDisabled=true;
       });
     }

     btn_Add_Emp()
     {
      let empObj:Employee = new Employee();
      empObj.empId = this.empId;
      empObj.empName = this.empName;
      empObj.sal = this.sal;
      empObj.job=this.job;
  
      this.httpObj.post<any>(this.url,  empObj).subscribe( (response:any) =>{
        alert("New employee details are added to server.");
        this.clearFields();
        this.btn_Get_Emp();  
      });
     }


     btn_Update_Emp()
     {
      let empObj:Employee = new Employee();
      empObj.empId = this.empId;
      empObj.empName = this.empName;
      empObj.sal = this.sal;
      empObj.job=this.job;
  
      this.httpObj.put<any>(this.url + "/" +  empObj.empId,  empObj).subscribe( (response:any) =>{
        alert("Employee details are updated to server.");
        this.clearFields();
        this.btn_Get_Emp();  
      });
     }

     delete_click(empId:number){
      this.httpObj.delete<any>(this.url + "/" + empId).subscribe( (response:any) =>{
        alert("Requested employee details are deleted from  server.");
        this.btn_Get_Emp();
      });
     }

     
     clearFields()
     {
       this.empId=0;
       this.isDisabled=false;
       this.empName="";
       this.sal=0;
       this.job="";
     }

}

class Employee{
  empName:string="";
  empId:number=0;
  sal:number=0;
  job:string="";
}

