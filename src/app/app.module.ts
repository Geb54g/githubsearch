import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontDirective } from './font.directive';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { LastPipe } from './pipe/last.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FontDirective,
    NotFoundComponent,
    LastPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
