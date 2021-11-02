import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  students:any[]=[
    {sid:10,sname:"Scott",course:"Angular",age:21,email:"test1@gmail.com"},
    {sid:20,sname:"john",course:"NodejS",age:23,email:"test2@gmail.com"},
    {sid:30,sname:"Tom",course:"DBMS",age:25,email:"test3@gmail.com"}
  ]

  get_Students():any[]
  {
    return this.students;
  }


  addData(dataObj:any) : void
  {
      this.students.push(dataObj);
  }

  removeData(id:number) : void
  {
      let index  = this.students.findIndex(dataObj => dataObj.sid == id);
      this.students.splice(index, 1);
  }

 /* select_Student(stuObj:any)
  {
    let index = this.students.findIndex(item => item.sid==stuObj.sid);
      this.Id =this.students[index].sid;
      this.Name= this.students[index].sname;
      this.Age= this.students[index].age;
      this.Course= this.students[index].course;
      this.Email= this.students[index].email;
      this.isDisabled = true;
  }

  update_Student()
  {
    let index  =  this.students.findIndex(   item =>  item.sid == this.Id);
    this.students[index].sname = this.Name;
    this.students[index].course = this.Course;
    this.students[index].age = this.Age;
    this.students[index].email = this.Email;
    this.clearFields();

  }

  clearFields()
  {
      
      this.Name = "";
      this.Course  = "";
      this.Email  = "";
      this.Age=0;
  }


  add_Students(sid:number)
  {
    let stuObj:any[] = [];
    let count=0;
    for(let i=0;i<this.students.length;i++)
    {   
      if(sid == this.students[i].sid)
      {
        count++;
      }  
    }

    if(count== 0)
    {
        stuObj.sid=this.Id;
        stuObj.sname=this.Name;
        stuObj.course=this.Course;
        stuObj.age=this.Age;
        stuObj.email=this.Email;
        this.students.push(stuObj);
    }
    else 
    {
      alert("sid already exits");
    }
    this.clearFields();
  }
  */
}

class Student
{
    sid:number=0;
    sname:string="";
    course:string="";
    age: number=0;
    email:string="";
    
}