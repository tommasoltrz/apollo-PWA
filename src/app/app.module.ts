import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GraphQLModule} from './graphql.module';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ProjectsComponent } from './pages/projects/projects.component';
import { HeaderComponent } from './header/header.component';
import { AddProjectComponent } from './pages/projects/add-project/add-project.component';
import { ProjectComponent } from './pages/projects/project/project.component';
import { UsersComponent } from './pages/users/users.component';
import { UserComponent } from './pages/users/user/user.component';
import { AddUserComponent } from './pages/users/add-user/add-user.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    HeaderComponent,
    AddProjectComponent,
    ProjectComponent,
    UsersComponent,
    UserComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    NgbModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
