import { Component, OnInit, ElementRef, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Output() close: EventEmitter<any> = new EventEmitter();

  modalClose() {
    this.close.emit();
  }
  
  constructor(private el: ElementRef) { }

  ngOnInit(): void {

    document.body.appendChild(this.el.nativeElement)
  }

  ngOnDestroy() {
    console.log('byyyyye')
  }

}
