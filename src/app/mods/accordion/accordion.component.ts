import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  openQuestion = 0;

  @Input() FAQs = [];

  openQuestionChange(index) {

    if (this.openQuestion === index) {
      this.openQuestion = -1;

    } else {
      this.openQuestion = index;
    }
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
