import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./login/login.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pagina/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'veiculos',
    loadChildren: () => import('./pagina/veiculo/relatorioveiculos/veiculos.module').then( m => m.VeiculosPageModule)
  },
  {
    path: 'veiculos/:key',
    loadChildren: () => import('./pagina/veiculo/relatorioveiculos/veiculos.module').then( m => m.VeiculosPageModule)
  },
  {
    path: 'relatorios',
    loadChildren: () => import('./pagina/pessoa/relatoriopessoa/relatorios.module').then( m => m.RelatoriosPageModule)
  },
  {
    path: 'relatorios/:key',
    loadChildren: () => import('./pagina/pessoa/relatoriopessoa/relatorios.module').then( m => m.RelatoriosPageModule)
  },
  {
    path: 'sobre',
    loadChildren: () => import('./pagina/sobre/sobre.module').then( m => m.SobrePageModule)
  },
  {
    path: 'sair',
    loadChildren: () => import('./pagina/sair/sair.module').then( m => m.SairPageModule)
  },
  {
    path: 'tag',
    loadChildren: () => import('./pagina/pessoa/atualizacaodecadastro/atualizarcadastropessoa.module').then( m => m.TagPageModule)
  },
  {
    path: 'tag/:key',
    loadChildren: () => import('./pagina/pessoa/atualizacaodecadastro/atualizarcadastropessoa.module').then( m => m.TagPageModule)
  },
  {
    path: 'acesso',
    loadChildren: () => import('./acesso/acesso.module').then( m => m.AcessoPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pagina/pessoa/cadastropessoa/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'cadastroveiculo',
    loadChildren: () => import('./pagina/veiculo/cadastroveiculo/cadastroveiculo.module').then( m => m.CadastroveiculoPageModule)
  },
  {
    path: 'cadastrotag',
    loadChildren: () => import('./pagina/tag/relatoriotag/cadastrotag.module').then( m => m.CadastrotagPageModule)
  },
  {
    path: 'cadastrotag/:key',
    loadChildren: () => import('./pagina/tag/relatoriotag/cadastrotag.module').then( m => m.CadastrotagPageModule)
  },
  {
    path: 'criarusuario',
    loadChildren: () => import('./pagina/criarusuariologin/criarusuariologin.module').then( m => m.HomePageModule)
  },
  {
    path: 'criartag',
    loadChildren: () => import('./pagina/tag/cadastrotag/criartag.module').then( m => m.CriartagPageModule)
  },
  
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
