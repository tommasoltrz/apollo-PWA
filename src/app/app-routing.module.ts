import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProjectsComponent} from './pages/projects/projects.component';
import {AppComponent} from './app.component';
import {AddProjectComponent} from './pages/projects/add-project/add-project.component';
import {ProjectComponent} from './pages/projects/project/project.component';
import {UsersComponent} from './pages/users/users.component';
import {UserComponent} from './pages/users/user/user.component';
import {AddUserComponent} from './pages/users/add-user/add-user.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'projects/add',
    component: AddProjectComponent
  },
  {
    path: 'projects/:projectName',
    children: [
      {path: '', component: ProjectComponent},
      {path: 'addUserToProject', component: AddUserComponent}
    ]
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'users/add',
    component: AddUserComponent
  },
  {
    path: 'users/:userName',
    component: UserComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
