import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchUserComponent } from './components/search-user/search-user.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PageUserComponent } from './components/page-user/page-user.component';
import { GitHubService } from './services/github.service';
import { UserCardComponent } from './components/user-card/user-card.component';
import { PageUsersListComponent } from './components/page-users-list/page-users-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchUserComponent,
    PageNotFoundComponent,
    PageUserComponent,
    UserCardComponent,
    PageUsersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    GitHubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
