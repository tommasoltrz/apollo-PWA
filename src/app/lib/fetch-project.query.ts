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

export class FetchProject extends Query<Response> {
  document = gql`
    query fetchProject($name: String!) {
      Project(name: $name) {
        name
        client
        startDate
      }
    }
  `;
}
