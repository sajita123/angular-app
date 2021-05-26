import { Component, Input, OnInit } from '@angular/core';
import { ItemType } from '../text-box/text-box.component';
@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  @Input() item:ItemType;
  constructor() { }

  ngOnInit(): void {
  }

}
