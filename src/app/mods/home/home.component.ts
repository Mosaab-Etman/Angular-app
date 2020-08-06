import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  modalStatus = false;

  FAQs = [
    { title: "How can we pay the fees?", answer: "You can pay via paypal, vaodafone cash and western union"},
    { title: "Do you have scheduale for the sale?", answer: "yes, at the end of the each season"},
    { title: "How long it takes to receive the product?", answer: 'It takes from 3 to 5 working days'}
  ]

  modalStatusChange() {
    this.modalStatus = !this.modalStatus;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
