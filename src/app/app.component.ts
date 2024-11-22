import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './fixtures/dummy-users';
import { type User } from './user/user.model';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, TasksComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public users: Array<User> = DUMMY_USERS;
  public selectedUser?: User;

  public onSelectUser(id: string) {
    this.selectedUser = this.users.find((user) => user.id === id);
  }
}
