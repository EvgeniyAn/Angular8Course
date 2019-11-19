import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-numberpannel',
  templateUrl: './numberpannel.component.html',
  styleUrls: ['./numberpannel.component.scss']
})
export class NumberpannelComponent implements OnInit {

  @Input() symbol: string;
  @Output() onAdd: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  click() {
    this.onAdd.emit(this.symbol);
  }
}
