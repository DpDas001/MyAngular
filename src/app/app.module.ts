import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ChangeTextDirective } from './change-text.directive';
import { SqrtPipe } from './app.sqrt';
import { Routes,RouterModule} from '@angular/router';
import {HttpClientModule } from '@angular/common/http'
import { MyutilserviceService } from './myutilservice.service';
import { HeaderComponent } from './header/header.component';
import { RentalComponent } from './rental/rental.component';
import { TextComponent } from './text/text.component';
import { RentalModule } from './rental/rental.module'
const routes: Routes = [
  { path:'',redirectTo: '/rentals', pathMatch: 'full'},
  { path:'text',component: TextComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroesComponent,
    ChangeTextDirective,
    SqrtPipe,
    TextComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RentalModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MyutilserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
