import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AsideComponent } from './shared/components/aside/aside.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LabelsComponent } from './labels/labels.component';
import { RubberStampsComponent } from './rubber-stamps/rubber-stamps.component';
import { SignageComponent } from './signage/signage.component';
import { ManualsFormsAdvertisingComponent } from './manuals-forms-advertising/manuals-forms-advertising.component';
import { LaserEngravingComponent } from './laser-engraving/laser-engraving.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    NavComponent,
    HomeComponent,
    ContactComponent,
    LabelsComponent,
    RubberStampsComponent,
    SignageComponent,
    ManualsFormsAdvertisingComponent,
    LaserEngravingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
