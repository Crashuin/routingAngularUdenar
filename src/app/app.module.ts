import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {RouterModule, Routes} from '@angular/router';
import { ErrorPaginaComponent } from './error-pagina/error-pagina.component';
import { ProductsComponent } from './products/products.component';
import { HaircutsComponent } from './haircuts/haircuts.component';

//home
//contact
//about

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path:'haircuts',
        component: HaircutsComponent
      },
      {
        path:'products',
        component: ProductsComponent
      },
    ]
  },
  
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  
  {
    path:'',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path:'**',
    component: ErrorPaginaComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ErrorPaginaComponent,
    ProductsComponent,
    HaircutsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
