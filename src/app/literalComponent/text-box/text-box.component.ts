import { Component, OnInit, Input } from '@angular/core';
export interface ItemType {
  name: string;
  id: number,
  title: string,
  views: number,
  type: string,
  value: any;
  selectedValue?:string;
}
@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent implements OnInit {
  @Input() item:ItemType;
  constructor() { }

  ngOnInit(): void {
  }

}
