import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Hello agian my lovers';
  description = 'Here we will display some data has been fetched from the server';


  medias = [
    { 
      imgUrl : '../../assets/collection01.jpg',
      header: 'shoes',
      description: 'Italina brown shoes made out of snake skin'
    },
    { 
      imgUrl : '../../assets/collection02.jpg',
      header: 'HeadPhone',
      description: 'Pink wireless headphone works with bluetooth'
    },
    { 
      imgUrl : '../../assets/collection03.jpg',
      header: 'Clock',
      description: 'Wall simple clock '
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
