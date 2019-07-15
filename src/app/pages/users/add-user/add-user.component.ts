import {Component, OnInit} from '@angular/core';
import {CreateUser} from '../../../lib/create-user.mutation';
import {FetchAllProject} from '../../../lib/fetch-all-projects.query';
import {AddUsersToProject} from '../../../lib/add-users-to-project.mutation';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  projects: any;
  projectName: string;

  constructor(private createUser: CreateUser,
              private fetchAllProjects: FetchAllProject,
              private addUsersToProject: AddUsersToProject,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.projectName = this.route.snapshot.paramMap.get('projectName');
    this.projects = this.fetchAllProjects.watch()
      .valueChanges;
  }

  addUser(name: string, company: string, role: string, age: number, sex: string) {
    if (name) {
      this.createUser
        .mutate({
          name: name,
          company: company,
          age: age,
          sex: sex,
          role: role
        }).subscribe(data => {
        if (this.projectName) {
          this.addUsersToProject
            .mutate({
              name: this.projectName,
              users: [name]
            }).subscribe();
        }
      });
      console.log('Added user');
    }
  }

}
