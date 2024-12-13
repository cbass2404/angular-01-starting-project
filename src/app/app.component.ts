import { Component } from '@angular/core';
import { DUMMY_USERS } from './fixtures/dummy-users';
import { type User } from './user/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public users: Array<User> = DUMMY_USERS;
  public selectedUser?: User;

  public onSelectUser(id: string) {
    if (this.selectedUser?.id === id) {
      this.selectedUser = undefined;
    } else {
      this.selectedUser = this.users.find((user) => user.id === id);
    }
  }
}
