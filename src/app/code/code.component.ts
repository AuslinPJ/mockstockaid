import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  myControl: FormControl = new FormControl();
  
    options = [
      'Apple',
      'Samsung',
      'Microsoft'
     ];

}
