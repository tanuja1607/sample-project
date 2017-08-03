import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-department-list',
  template: `<h3>DepartmentList</h3>
              
              <button  type="button" class="btn btn-default btn-info dept" (click)="onClick(department)" *ngFor="let department of departments">
              {{department.id}}. 
              {{department.name}}
              </button>
              `,
               styleUrls: ['./department-list.component.css']
              
})
export class DepartmentListComponent implements OnInit {
  
    departments =[
      {"id":1,"name":"Angular"},
      {"id":2,"name":"NodeJs"},
      {"id":3,"name":"MangoDB"},
      {"id":4,"name":"Cloud Technologies"},
      {"id":5,"name":"Bootstrap"},

    ]

  constructor(private router:Router) { }

  ngOnInit() {
  }

onClick(department){
  this.router.navigate(['/departments',department.id]);
}
}
