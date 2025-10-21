import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardItemComponent } from "../card-item/card-item.component";
import { Item } from '../../../models/item.model';

@Component({
  selector: 'app-cadastro-item',
  standalone: true,
  imports: [FormsModule, CommonModule, CardItemComponent],
  templateUrl: './cadastro-item.component.html',
  styleUrl: './cadastro-item.component.css'
})
export class CadastroItemComponent {
  novoItem:Item = {
    id:0,
    nome: '',
    tipo: '',
    poder: 0,
   };
  contador = 0;
  tipos = ['Espada','Escudo','Porção']

  itens:Item[] = [];

  salvarItem(){
    
    if(!this.novoItem.nome || !this.novoItem.tipo || !this.novoItem.poder){
      alert("Preencha todos os cambos obrigatórios!");
      return;
    }
    this.contador++;

    this.novoItem.id = this.contador;
    
    this.itens.push({... this.novoItem})

    this.novoItem = {
    id:0,
    nome: '',
    tipo: '',
    poder: 0,   
  };

  }
}
