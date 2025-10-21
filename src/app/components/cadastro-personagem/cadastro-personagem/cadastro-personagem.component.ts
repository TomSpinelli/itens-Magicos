import { Component } from '@angular/core';
import {FormsModule }from '@angular/forms'
import { CardPersonagemComponent } from '../card-personagem/card-personagem.component';
import { Personagem } from '../../../models/personagem.model';
import { SharedModule } from '../../../shared/shared.module';
@Component({
  selector: 'app-cadastro-personagem',
  standalone: true,
  imports: [FormsModule,SharedModule , CardPersonagemComponent],
  templateUrl: './cadastro-personagem.component.html',
  styleUrl: './cadastro-personagem.component.css'
})
export class CadastroPersonagemComponent{
  personagens: Personagem[] = []; // changed code
  contador =0;
  
  novoPersonagem:Personagem = {
    id:0,
    nome:'',
    raca:'', 
    color: '#a88989ee',
  };
  

  
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