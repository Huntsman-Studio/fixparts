import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  searchForm: FormGroup

  constructor() {
    this.searchForm = this.createSearchForm()
  }

  ngOnInit(): void {
  }

  // createSearchForm
  createSearchForm() {
    return new FormGroup({
      search: new FormControl(undefined, [Validators.required])
    })
  }

  // doSearch
  doSearch(form: FormGroup) {

  }

}
