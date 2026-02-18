import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaBasica } from './lista-basica/lista-basica';

//modulo personlizado que exporta componentes de tipo lista

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListaBasica
  ],
  exports: [
    ListaBasica
  ]
})
export class ListsModule { }
