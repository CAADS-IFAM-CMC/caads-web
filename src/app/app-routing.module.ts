import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MenuHeaderComponent } from './components/menu-header/menu-header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';

// ROTAS FORAM CRIADAS PARA FINS DE DESENVOLVIMENTO EM EQUIPE, POSTERIORMENTE SERÃO DESCARTADAS

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', // Define uma rota padrão (se necessário)
    pathMatch: 'full'
  },
  // Página principal
  {
    path: 'home',
    component: HomeComponent
  },
  // Rota para o módulo "menu-header"
  {
    path: 'menu-header',
    component: MenuHeaderComponent
  },
  // Rota para o módulo "footer"
  {
    path: 'footer',
    component: FooterComponent
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
