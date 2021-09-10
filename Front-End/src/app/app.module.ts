//import { CadastrarComponent } from './cadastrar/cadastrar.component';
//import { EntrarComponent } from './entrar/entrar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';

import { RodapeComponent } from './rodape/rodape.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OProjetoComponent } from './o-projeto/o-projeto.component';
import { CriadoresComponent } from './criadores/criadores.component';
import { IncioComponent } from './incio/incio.component';
import { PerfilComponent } from './perfil/perfil.component';
import { TemaComponent } from './tema/tema.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { VazioComponent } from './vazio/vazio.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SobreNosComponent,
    RodapeComponent,
    EntrarComponent,
    CadastrarComponent,
    HomePageComponent,
    OProjetoComponent,
    CriadoresComponent,
    IncioComponent,
    PerfilComponent,
    TemaComponent,
    TemaEditComponent,
    TemaDeleteComponent,
    PostagemEditComponent,
    PostagemDeleteComponent,
    VazioComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
