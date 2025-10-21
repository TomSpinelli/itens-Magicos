import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

import { CadastroItemComponent } from "./components/item/cadastro-item/cadastro-item.component";
import { CadastroPersonagemComponent } from './components/cadastro-personagem/cadastro-personagem/cadastro-personagem.component';
import { PaginaPersonagemComponent } from './components/pagina-personagem/pagina-personagem.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CadastroPersonagemComponent, CadastroItemComponent,PaginaPersonagemComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-spa';

}
