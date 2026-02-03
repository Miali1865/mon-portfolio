import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Accueil } from './pages/accueil/accueil';
import { Projets } from './pages/projets/projets';
import { Contact } from './pages/contact/contact';
import { Header } from './layout/header/header';
import { Sidebar } from './layout/sidebar/sidebar';
import { Footer } from './layout/footer/footer';
import { Collaborator } from './pages/collaborator/collaborator';
import { About } from './pages/about/about';
import { Experiences } from './experiences/experiences';

@NgModule({
  declarations: [
    App,
    Accueil,
    Projets,
    Header,
    Sidebar,
    Footer,
    Collaborator,
    About,
    Experiences,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Contact
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
