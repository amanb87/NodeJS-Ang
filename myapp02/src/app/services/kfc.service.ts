import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KfcService {

  msg = 'KFC\'s fiery burgers' ;
  constructor() {console.log('KfcService ctr'); }
}
