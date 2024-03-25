import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { SobreMimComponent } from './sobre-mim/sobre-mim.component';
import { BannerComponent } from './banner/banner.component';
import { ContatoComponent } from './contato/contato.component';
import { TrabalhosComponent } from './trabalhos/trabalhos.component';
import { ProjetosPessoaisComponent } from './projetos-pessoais/projetos-pessoais.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { NgbAccordion, NgbAccordionModule, NgbModule, NgbNav, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TabelaClientesComponent } from '../tabela-clientes/tabela-clientes.component';

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}



@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    SobreMimComponent,
    TrabalhosComponent,
    ProjetosComponent,
    ProjetosPessoaisComponent,
    ContatoComponent,
    TabelaClientesComponent
  ],
  imports: [
    CommonModule,
    NgbNavModule,
    CarouselModule,
    NgbAccordionModule,
    TranslateModule.forChild({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })
  ]
})
export class HomeModule { }
