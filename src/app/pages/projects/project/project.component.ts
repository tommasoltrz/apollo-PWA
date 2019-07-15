import {Component, OnInit} from '@angular/core';
import {FetchProject} from '../../../lib/fetch-project.query';
import {ActivatedRoute} from '@angular/router';
import {FetchUsersByProject} from '../../../lib/fetch-users-by-project.query';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  project: any;
  users: any;
  projectID: any;

  constructor(private fetchProject: FetchProject,
              private fetchUsersByProject: FetchUsersByProject,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.projectID = this.route.snapshot.paramMap.get('projectName');
    this.project = this.fetchProject.watch({
      name: this.projectID
    }, {
      fetchPolicy: 'network-only'
    })
      .valueChanges;

    this.users = this.fetchUsersByProject.watch({
      name: this.projectID
    }, {
      fetchPolicy: 'network-only'
    })
      .valueChanges;
  };

}
