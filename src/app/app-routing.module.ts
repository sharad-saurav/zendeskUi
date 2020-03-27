import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GitUsersComponent } from './components/git-users/git-users.component';
import { UserRepoComponent } from './components/user-repo/user-repo.component';
import {ZendeskComponent} from './components/zendesk/zendesk.component';
const routes: Routes = [


  { path: '', redirectTo: '/zendesk', pathMatch: 'full' },
  { path: 'zendesk', component: ZendeskComponent },
  { path: 'gitUsers', component: GitUsersComponent },
  { path: 'userRepo/:name', component: UserRepoComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
