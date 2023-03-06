import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddConsoleComponent } from './components/add-console/add-console.component';
import { ConsoleDetailsComponent } from './components/console-details/console-details.component';
import { ConsoleListComponent } from './components/console-list/console-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'console', pathMatch: 'full' },
  { path: 'console', component: ConsoleListComponent },
  { path: 'console/:id', component: ConsoleDetailsComponent },
  { path: 'add', component: AddConsoleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
