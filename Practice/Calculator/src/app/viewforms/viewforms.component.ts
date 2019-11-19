import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-viewforms',
  templateUrl: './viewforms.component.html',
  styleUrls: ['./viewforms.component.scss']
})
export class ViewformsComponent implements OnInit {
  @Input() result: any = '';

  constructor() { }

  ngOnInit() {
  }

}
