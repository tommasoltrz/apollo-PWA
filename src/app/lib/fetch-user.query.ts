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
  user: User;
}


@Injectable({
  providedIn: 'root',
})

export class FetchUser extends Query<Response> {
  document = gql`
      query fetchUser($name: String!) {
        User(name: $name) {
          name
          company
          role
          age
          sex
        }
      }
  `;
}
