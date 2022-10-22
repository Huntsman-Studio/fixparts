import { Component, OnInit } from '@angular/core';
import { GlobaldataService } from 'src/app/core/services/globaldata.service';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss']
})
export class MobileNavComponent implements OnInit {

  public menu: boolean | undefined

  constructor(private globalDataService: GlobaldataService) { }

  ngOnInit(): void {
    this.globalDataService.menu.subscribe( val => (
      this.menu = val
    ));
  }

  // closeMenu
  closeMenu() {
    this.globalDataService.showHideMenu(false)
  }
}
