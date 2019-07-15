import {Component, OnInit} from '@angular/core';
import {FetchAllProject} from '../../lib/fetch-all-projects.query';
import {InMemoryCache} from 'apollo-cache-inmemory';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: any;

  constructor(private fetchAllProjects: FetchAllProject) {
  }

  ngOnInit() {
    this.projects = this.fetchAllProjects.watch()
      .valueChanges;
  }
}


