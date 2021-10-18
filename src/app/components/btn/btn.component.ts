import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'kasko-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss'],
})
export class BtnComponent implements OnInit {
  @Input() data: [];

  constructor() {}

  ngOnInit(): void {
  }
}
