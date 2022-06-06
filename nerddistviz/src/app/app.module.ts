import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { MapViewComponent } from './map-view/map-view.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TreeViewComponent,
    MapViewComponent,
    NavBarComponent,
    HomeViewComponent
  ],
  imports: [
    BrowserModule,
    // ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeViewComponent},
      { path: 'mapView', component: MapViewComponent},
      { path: 'treeView', component: TreeViewComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
