import {Injectable} from '@angular/core';
import {Mutation} from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root',
})
export class CreateProject extends Mutation {
  document = gql`
    mutation createProject( $name: String!,$client: String!,  $startDate: String) {
      createProject( name: $name, client: $client, startDate: $startDate)
    }
  `;
}
