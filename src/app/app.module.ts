import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ChangeTextDirective } from './change-text.directive';
import { SqrtPipe } from './app.sqrt';
import { RouterModule} from '@angular/router';
import {HttpClientModule } from '@angular/common/http'
import { MyutilserviceService } from './myutilservice.service';
import { HeaderComponent } from './header/header.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroesComponent,
    ChangeTextDirective,
    SqrtPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,

    RouterModule.forRoot([
             {
                path: 'new-cmp',
                component: HeroesComponent
             }
          ])
  ],
  providers: [MyutilserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
