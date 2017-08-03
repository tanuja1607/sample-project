import { Component } from '@angular/core';
import {FormBuilder,Validators,FormGroup} from '@angular/forms';
import {AppService} from './app.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 
})
export class AppComponent {
  register: FormGroup;
  res:any;
  reg:any;
  result=false;
  careerValue:string;
  isRegister:boolean=false;
 isGetUsers:boolean=false;
  careers: any[];



 
  constructor(private fb: FormBuilder,private appService:AppService){
    this.careers = [
            {value: 'architech', viewValue: 'architech'},
            {value: 'development', viewValue: 'development'},
            {value: 'testing', viewValue: 'testing'}
  ]
  console.log(this.careers)
  this.register= this.fb.group({
    'name':["this.name",Validators.required],
    'gender':["this.gender",Validators.required],
    // 'lang':["",Validators.required],
    'career':["this.career",Validators.required],
    'pass':["this.pass",Validators.required],
    'email':["this.email",Validators.required],
    'no':["this.no",Validators.required],
    'address':["this.address",Validators.required]
 });
  }
  
  Submit(register){
    // this.result=true;
    // console.log(event);
    // console.log("hello");
    // console.log(register.value);
    // console.log(this.register.value);
    // this.reg=this.register.value
  
this.appService.url ='http://localhost:5000/register';
    this.appService.postService(this.register.value).subscribe(data =>  {
      // this.res=data;
      console.log(data);
      alert("successfully registred");
      
 })
}
getuser()
{
  
  this.result=true;
  this.isGetUsers=true;
  this.appService.url ='http://localhost:5000/getuser';
    this.appService.getService().subscribe(data =>  {
      this.res=data.res;
      this.isRegister=false;
      console.log("hello");
      console.log("In component");
      console.log(data);
      
 })
}

Register(){
  this.isRegister=true;
    this.isGetUsers=false;
  console.log("hai");
}
}
