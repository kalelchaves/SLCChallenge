import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PageUserComponent } from './components/page-user/page-user.component';
import { PageUsersListComponent } from './components/page-users-list/page-users-list.component';

const routes: Routes = [
  {path: '', component: PageUsersListComponent},
  {path: 'user/:login', component: PageUserComponent},
  {path: '404', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
