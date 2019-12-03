import { Component, OnInit } from '@angular/core';
import { Libro } from './libro.model';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  libro: Libro;

  constructor() { }

  ngOnInit() {
    this.libro = new Libro('123-12-12345-12-1', 'Ma vala', 'Pietro Smusi', 2019);
  }

}