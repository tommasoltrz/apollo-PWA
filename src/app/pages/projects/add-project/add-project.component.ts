import { Component, OnInit } from '@angular/core';
import {CreateProject} from '../../../lib/create-project.mutation';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  constructor(private createProject: CreateProject) { }

  ngOnInit() {
  }

  addProject(name: string, client: string, startDate: string) {
    console.log(name, client, startDate);
    this.createProject
      .mutate({
        name: name,
        client: client,
        startDate: startDate,
      })
      .subscribe();
  }

}
