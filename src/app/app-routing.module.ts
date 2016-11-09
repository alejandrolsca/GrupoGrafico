import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LabelsComponent } from './labels/labels.component';
import { RubberStampsComponent } from './rubber-stamps/rubber-stamps.component';
import { SignageComponent } from './signage/signage.component';
import { ManualsFormsAdvertisingComponent } from './manuals-forms-advertising/manuals-forms-advertising.component';
import { LaserEngravingComponent } from './laser-engraving/laser-engraving.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'labels', component: LabelsComponent },
      { path: 'rubber-stamps', component: RubberStampsComponent },
      { path: 'signage', component: SignageComponent },
      { path: 'manuals-forms-advertising', component: ManualsFormsAdvertisingComponent },
      { path: 'laser-engraving', component: LaserEngravingComponent },
    ], { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }