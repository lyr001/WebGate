import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() item: object;
  subclass: string;

  constructor() { }

  ngOnInit() {
  }

  getKeys(item) {
    return Object.keys(item);
  }

  getType(item) {
    return Object.prototype.toString.call(item);
  }

  getSubclass(item) {
    return item.subclass;
  }

}
