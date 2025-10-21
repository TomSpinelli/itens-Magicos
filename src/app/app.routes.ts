import { Routes } from '@angular/router';
import { CadastroItemComponent } from './components/item/cadastro-item/cadastro-item.component';
import { CadastroPersonagemComponent } from './components/cadastro-personagem/cadastro-personagem/cadastro-personagem.component';

export const routes: Routes = [
    {
        path:'',  redirectTo:'cadastro-item', pathMatch:'full'
    },
    {
        path:'cadastro-item', component: CadastroItemComponent
    },
    {
        path:'cadastro-personagem', component: CadastroPersonagemComponent
    },

];
