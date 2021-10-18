import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'kasko-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  messages: [];
  buttons: [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getResponse().subscribe((response) => {
      this.messages = response.messages;
      this.buttons = response.buttons;

      console.log('messsages: ', this.messages);
      console.log('buttons: ', this.buttons);
    });
  }
}
