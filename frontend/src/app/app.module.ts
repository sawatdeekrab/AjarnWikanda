import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap';
import { MenubarModule } from 'primeng/primeng';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';

import { AppComponent } from './app.component';
import { BiographyComponent } from './biography.component';
import { ContactComponent } from './contact.component';
import { ResearchesComponent } from './researches.component';
import { ResearchService } from './research.service';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    BiographyComponent,
    ContactComponent,
    ResearchesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabsModule.forRoot(),
    MenubarModule,
    DataTableModule,
    SharedModule,
    TableModule,
    BrowserAnimationsModule
  ],
  providers: [ResearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
