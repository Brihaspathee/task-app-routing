import {TasksComponent} from "./tasks/tasks.component";
import {NoTaskComponent} from "./tasks/no-task/no-task.component";
import {UserTasksComponent} from "./users/user-tasks/user-tasks.component";
import {NewTaskComponent} from "./tasks/new-task/new-task.component";
import {NotFoundComponent} from "./not-found/not-found.component";
type PathMatch = "full" | "prefix" | undefined;
export const ROUTES = [
  {
    path: '',
    component: NoTaskComponent
  },
  {
    path: 'users/:userId', // <your-domain>/users/<userId>/tasks
    component: UserTasksComponent,
    children: [
      {
        path: '',
        redirectTo: 'tasks',
        pathMatch: 'prefix' as PathMatch,
      },
      {
        path: 'tasks',
        component: TasksComponent
      },
      {
        path: 'tasks/new',
        component: NewTaskComponent
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
]
