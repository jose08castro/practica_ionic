import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {

  public form = [
    { val: 'primary', isChecked: true },
    { val: 'secondary', isChecked: false },
    { val: 'tertiary', isChecked: false },
  ];

  constructor() { }

  ngOnInit() {
  }

  onClick(entry){
    console.log(entry)
  }

}
