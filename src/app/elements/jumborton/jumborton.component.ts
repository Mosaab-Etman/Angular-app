import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jumborton',
  templateUrl: './jumborton.component.html',
  styleUrls: ['./jumborton.component.css']
})
export class JumbortonComponent implements OnInit {

  @Input() title = '';
  @Input() description= '';

  constructor() { }

  ngOnInit(): void {
  }

}
