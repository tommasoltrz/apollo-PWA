import { Component, OnInit } from '@angular/core';
import {FetchUser} from '../../../lib/fetch-user.query';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: any;
  userID: any;

  constructor(private fetchUser: FetchUser,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.userID = this.route.snapshot.paramMap.get('userName');
    this.user = this.fetchUser.watch({
      name: this.userID
    }, {
      fetchPolicy: 'network-only'
    })
      .valueChanges;
  };

}
