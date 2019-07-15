import {Injectable} from '@angular/core';
import {Query} from 'apollo-angular';
import gql from 'graphql-tag';

export interface User {
  name: string;
  company: string;
  role: string;
  age: number;
  sex: string;
}

export interface Response {
  user: User[];
}


@Injectable({
  providedIn: 'root',
})

export class FetchUsersByProject extends Query<Response> {
  document = gql`
    query fetchUsersByProject($name: String!) {
      Project(name: $name) {
        users{
          name
        }
      }
    }
  `;
}
