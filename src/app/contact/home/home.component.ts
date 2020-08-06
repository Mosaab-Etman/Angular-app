import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  neededData = [{ boxOne : 'Your Name' , boxTwo: 'Choose your shift',  boxThree: 'Type your comments'}]
  
  constructor() { }

  ngOnInit(): void {
  }

}
