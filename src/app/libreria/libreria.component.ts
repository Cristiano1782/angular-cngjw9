import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro/libro.model';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.css']
})
export class LibreriaComponent implements OnInit {

  libreria: Libro[];

  constructor() { }

  ngOnInit() {
    this.libreria = [];
    this.libreria.push(new Libro('123-12-12345-12-1', 'Ma vala', 'Pietro Smusi', 2019));
    this.libreria.push(new Libro('999-12-12345-12-1', 'Russel crowe', 'Salmo Lebowski', 2017));
    this.libreria.push(new Libro('000-12-12345-12-1', 'sw1n60', 'th Supreme', 2019));
  }

}