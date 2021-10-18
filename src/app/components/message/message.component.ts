import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'kasko-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  @Input() data: any;

  isRightDirection: boolean;
  
  constructor() {}

  ngOnInit(): void {
    this.isRightDirection = this.data.isResponse;
  }
}
