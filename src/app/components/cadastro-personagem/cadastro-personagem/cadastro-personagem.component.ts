import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule }from '@angular/forms'
import { CardPersonagemComponent } from '../card-personagem/card-personagem.component';
import { Personagem } from '../../../models/personagem.model';




@Component({
  selector: 'app-cadastro-personagem',
  standalone: true,
  imports: [FormsModule, CommonModule, CardPersonagemComponent],
  templateUrl: './cadastro-personagem.component.html',
  styleUrl: './cadastro-personagem.component.css'
})
export class CadastroPersonagemComponent {
  novoPersonagem:Personagem = {
    id:0,
    nome:'',
    raca:'', 
    color: '#070707ee',
  };
 


contador =0;
personagens: Personagem[] = []; // changed code



  salvarPersonagem(){
    
    if(!this.novoPersonagem.nome || !this.novoPersonagem.raca || !this.novoPersonagem.color){
      alert("Preencha todos os cambos obrigatórios!");
      return;
    }
    this.contador++;

    this.novoPersonagem.id = this.contador;
    
    this.personagens.push({... this.novoPersonagem})

    this.novoPersonagem = {
    id:0,
    nome: '',
    raca: '',
    color: '',   
  };

  }




}