import { Component, OnInit } from '@angular/core';
import {FetchAllUsers} from '../../lib/fetch-all-users.mutation';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any;


  constructor(private fetchAllUsers: FetchAllUsers) { }

  ngOnInit() {
    this.users = this.fetchAllUsers.watch()
      .valueChanges;
  }

}
