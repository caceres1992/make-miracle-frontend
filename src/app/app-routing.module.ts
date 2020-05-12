import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', component: LoginComponent },
  {
    path: '', component: DashboardComponent, children: [
      { path: '', redirectTo: '/home', pathMatch: 'full'},
      { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
      { path: 'student', loadChildren: () => import('./pages/student/student.module').then(m => m.StudentModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
