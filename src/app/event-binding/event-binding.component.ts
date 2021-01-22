import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  i=0;
  buttonName = "My Button"
  SpinnerMode:ProgressSpinnerMode = "determinate";
  btnEnable = true;
  value = 0;
  toppings = new FormControl();
  selectdisabled = false;
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  inputName = "teste";
  select = 0;

  
  constructor() { }

  ngOnInit(): void {
  }

  save(){
    console.log("ok")
  }

  inc(){
    this.i++;
    this.buttonName = "Clicked " + this.i;
    this.value = this.i;
  }
  disable(){
    this.btnEnable = false;
    this.SpinnerMode = "indeterminate";
    setTimeout(() => {
      this.btnEnable = true;
      this.SpinnerMode = "determinate";
    }, 3000);
  }
  change(event){
    this.selectdisabled = event.checked
  }
  selectionchange(event){
    console.log(event.value)
  }
  selectionchange2(event){
    this.select = event.value;
  }
}
