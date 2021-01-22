import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  FirstName = 'John'
  person = {
    FirstName: 'a',
    LastName: 'b',
    age: 100,
    address:'algum'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
