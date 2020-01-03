import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyutilserviceService {

  constructor() { }
    showTodayDate() {
        let ndate = new Date();
        return ndate;
     }
}
