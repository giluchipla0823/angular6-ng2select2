import { Component, OnInit } from '@angular/core';
import { Select2OptionData } from 'ng2-select2';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  public data: Array<Select2OptionData>;
  public options: Select2Options;
  public selected: string = null;

  constructor() { }

  ngOnInit() {
    this.data = [
      {
        id: '1',
        text: 'Basic 1'
      },
      {
        id: '2',
        // disabled: true,
        text: 'Basic 2'
      },
      {
        id: '3',
        text: 'Basic 3'
      },
      {
        id: '4',
        text: 'Basic 4'
      }
    ];

    this.options = {
      width: '100%',
      placeholder: 'Seleccionar',
      theme: 'bootstrap',
      allowClear: true
    }
  }

  public changed(e: any): void {
    this.selected = e.value;
  }

}
