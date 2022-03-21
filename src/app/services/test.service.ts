import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  constructor(
  ) { }

  sendMessages(data: any): any {
    return this.emulateAccess(data)
  };

  emulateAccess(data: any): any{
    if (data.clave) {
      let response = {
        "errorMessage": "",
        "success": true,
        "codeStatus": 200,
        "result": `c1fafaa6-3a91-4c58-${Math.floor(Math.random() * 9999 - 1000 + 1000)}-06209f951331`
      }
      return response;
    }
  }
}
