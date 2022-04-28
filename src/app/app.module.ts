import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontDirective } from './font.directive';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { LastPipe } from './pipe/last.pipe';
import { ReposComponent } from './repos/repos/repos.component';
import { UsersComponent } from './users/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    FontDirective,
    NotFoundComponent,
    LastPipe,
    ReposComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
