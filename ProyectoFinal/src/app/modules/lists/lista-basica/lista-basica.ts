import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-basica',
  imports: [CommonModule],
  templateUrl: './lista-basica.html',
  styleUrl: './lista-basica.scss',
})
export class ListaBasica implements OnInit {

  listaElementos: string[] = ['Tarea 1', 'Tarea 2', 'Tarea 3'];

  cargando: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  cambiarCargando() {
    this.cargando = !this.cargando;
  }
}
