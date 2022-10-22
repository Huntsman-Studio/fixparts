import { Component, OnInit } from '@angular/core';
import { GlobaldataService } from 'src/app/core/services/globaldata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private globalDateService: GlobaldataService) { }

  ngOnInit(): void {
  }

  // showMenu
  showMenu() {
    this.globalDateService.showHideMenu(true);
  }
}
