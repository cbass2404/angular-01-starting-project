import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksComponent } from './tasks.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NewTaskComponent, TaskComponent, TasksComponent],
  exports: [TasksComponent],
  imports: [CommonModule, FormsModule, SharedModule],
})
export class TasksModule {}
