import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { ListSondageComponent } from './list-sondage/list-sondage.component';
import { SondageComponent } from './sondage/sondage.component';

const routes: Routes = [
  { path: 'auth', 
    component: AuthComponent 
  },
  { path: 'sondage', 
    component: SondageComponent 
  },
  { path: 'listSondage', 
    component: ListSondageComponent
  },
  { path: 'home', 
    component: HomeComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
