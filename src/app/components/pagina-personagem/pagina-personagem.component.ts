import { Component, OnInit } from '@angular/core';
import { Personagem } from '../../models/personagem.model';
import { CardPersonagemComponent } from '../cadastro-personagem/card-personagem/card-personagem.component';
import { PersonagemService } from '../../services/personagem.service';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-pagina-personagem',
  standalone: true,
  imports: [SharedModule, CardPersonagemComponent],
  templateUrl: './pagina-personagem.component.html',
  styleUrls: ['./pagina-personagem.component.css']
})
export class PaginaPersonagemComponent implements OnInit {
  personagens:Personagem[] = []
  carregando = true;
  erro: string | null = null
  teste:string = ""

  
    constructor(private personagemService:PersonagemService){}  
  
  
    ngOnInit(): void {
      this.listarPersonagens();
    }
  
     listarPersonagens(){
      this.personagemService.listar().subscribe(
        {
          next: (dados) => {
            this.personagens = dados
            this.carregando = false
            console.log(this.personagens)
          },
          error: (err) =>{
            this.erro = err.message,
            this.carregando = false
          }
        },      
      )
    }
  }
