import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultUserProfileComponent } from './default-user-profile/default-user-profile.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MiddleSidebarHeaderComponent } from './middle-sidebar-header/middle-sidebar-header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderSearchComponent } from './header-search/header-search.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    AppComponent,
    DefaultUserProfileComponent,
    NavigationComponent,
    MiddleSidebarHeaderComponent,
    FooterComponent,
    HeaderSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot()
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent, NavigationComponent, MiddleSidebarHeaderComponent, FooterComponent, HeaderSearchComponent, DefaultUserProfileComponent]
})
export class AppModule { }
