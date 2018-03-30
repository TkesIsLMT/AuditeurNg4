import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { CategorieListComponent } from './business/categories/categorie-list/categorie-list.component';

const routes: Routes=[
  { path: 'home', component:HomeComponent },
  { path: 'categories', component: CategorieListComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    BrowserModule, 
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    PageNotFoundComponent,
    CategorieListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
