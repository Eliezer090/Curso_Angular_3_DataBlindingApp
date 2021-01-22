import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tho-way-data-binding',
  templateUrl: './tho-way-data-binding.component.html',
  styleUrls: ['./tho-way-data-binding.component.css']
})
export class ThoWayDataBindingComponent implements OnInit {
  name1: String=""
  name2: String=""

  client={
    firstName:"john",
    lastName: "aaa",
    address:"",
    age: 23
  }

  constructor() { }

  ngOnInit(): void {
  }

}
