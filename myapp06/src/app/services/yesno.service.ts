import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YesnoService {
    getString(value: boolean) {
      if (value) {
        return 'Yes';
      } else {
        return 'No';
      }
    }
}
