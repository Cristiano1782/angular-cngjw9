import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro/libro.model';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.css']
})
export class LibreriaComponent implements OnInit {

  libreria: Libro[];
  corrente: number;

  constructor() { }

  ngOnInit() {
    this.libreria = [];
    this.libreria.push(new Libro('123-12-12345-12-1', 'Sport', 'Marracash', 2019));
    this.libreria.push(new Libro('999-12-12345-12-1', 'Russel crowe', 'Salmo Lebowski', 2017));
    this.libreria.push(new Libro('000-12-12345-12-1', 'sw1n60', 'tha Supreme', 2019));
    this.libreria.push(new Libro('777-12-12345-12-1', 'Circle', 'Post Malone', 2020));
    
    this.corrente = 0;
  }


  onTitoloClick(indice: number){
    this.corrente = indice;
  }

  onNuovoClick(){
    this.libreria.push(new Libro('','','',null));
    this.corrente = this.libreria.length - 1;
  }

}