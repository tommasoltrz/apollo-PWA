import {Injectable} from '@angular/core';
import {Mutation} from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root',
})
export class AddUsersToProject extends Mutation {
  document = gql`
    mutation addProjectUsers($name: String!, $users: [String!]!) {
      addProjectUsers(name: $name, users: $users)
    }
  `;
}
