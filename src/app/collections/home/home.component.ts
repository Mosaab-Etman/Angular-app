import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data = [
    { name: 'jack', age: '32', job: 'engineer'},
    { name: 'william', age: '40', job: 'doctor'},
    { name: 'smantha', age: '35', job: 'nurse'}
  ]

  headers = [
    { key: 'name', label: 'Name'},
    { key: 'age', label: 'Age'},
    { key: 'job', label: 'Job'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
