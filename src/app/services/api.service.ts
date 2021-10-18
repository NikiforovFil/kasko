import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  MockData: {} = {
    messages: [
      { id: 1, text: 'message 1', isResponse: true },
      { id: 2, text: 'message 2' },
      { id: 3, text: 'message 3', isResponse: true },
      {
        id: 4,
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio provident ex libero. Architecto rem saepe molestias placeat aliquid, accusantium dicta ex dolore veniam perferendis et voluptate, harum, quae autem esse ipsum aliquam voluptas ratione exercitationem? Asperiores distinctio, ipsum similique autem natus quia voluptate quasi illum eveniet, ad, dolorem eligendi consectetur?',
      },
    ],
    buttons: [
      { id: 1, title: 'btn 1', action: '' },
      { id: 2, title: 'btn 2', action: '' },
      { id: 3, title: 'btn 3', action: '' },
      { id: 4, title: 'btn 4', action: '' },
    ],
  };

  constructor(private http: HttpClient) {}

  getResponse(): Observable<any> {
    return of(this.MockData);
  }
}
