import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { Routes, RouterModule }    from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent }         from './app.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { ItemComponent } from './item/item.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'item/:id', component: ItemComponent },
  { path: 'createItem', component: CreateItemComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ModalModule.forRoot()
  ],
  declarations: [
    AppComponent,
    CreateItemComponent,
    ItemComponent,
    MainComponentComponent,
    HomeComponent
  ],
  providers: [  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
