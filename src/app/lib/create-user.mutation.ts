import {Injectable} from '@angular/core';
import {Mutation} from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root',
})
export class CreateUser extends Mutation {
  document = gql`
    mutation createUser($name: String!, $company: String, $role: String, $age: Int, $sex: String) {
      createUser(name: $name, company: $company, role: $role, age: $age, sex: $sex)
    }
  `;
}

