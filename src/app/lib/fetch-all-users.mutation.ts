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
  person: User[];
}


@Injectable({
  providedIn: 'root',
})

export class FetchAllUsers extends Query<Response> {
  document = gql`
    query fetchAllUsers {
      User {
        name
        company
        role
        age
        sex
      }
    }
  `;
}
