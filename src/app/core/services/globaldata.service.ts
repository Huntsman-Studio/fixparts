import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobaldataService {

  public menu: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor() { }

  // showHideMenu
  showHideMenu(value: boolean) {
    this.menu.next(value);
  }
}
