import {Injectable} from '@angular/core';
import {Query} from 'apollo-angular';
import gql from 'graphql-tag';

export interface Project {
  name: string;
  client: string;
  startDate: string;
}

export interface Response {
  person: Project[];
}


@Injectable({
  providedIn: 'root',
})

export class FetchAllProject extends Query<Response> {
  document = gql`
    query fetchAllProject {
      Project {
        name
        client
        startDate
      }
    }
  `;
}
