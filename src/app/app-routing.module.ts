import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './MyComponent/todos/todos.component';
import { AboutComponent } from './MyComponent/about/about.component';

const routes: Routes = [
  // {path: 'first-component', component: FirstConponent }
  {path: '', component: TodosComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
