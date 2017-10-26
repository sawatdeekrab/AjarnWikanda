import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BiographyComponent }   from './biography.component';
import { ContactComponent } from './contact.component';
import { ResearchesComponent } from './researches.component';


const routes: Routes = [
  { path: '', component: BiographyComponent  },
  { path: 'biography',  component: BiographyComponent },
  { path: 'contact',  component: ContactComponent },
  { path: 'research',  component: ResearchesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}