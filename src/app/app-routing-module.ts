import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Accueil } from './pages/accueil/accueil';
import { Projets } from './pages/projets/projets';
import { Contact } from './pages/contact/contact';
import { Experiences } from './pages/experiences/experiences';

const routes: Routes = [
  { path: '', component: Accueil },
  { path: 'projets', component: Projets },
  { path: 'contact', component: Contact },
  { path: 'experiences', component: Experiences },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
