import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'public', pathMatch: 'full'},
  {path: 'public', loadChildren: () => import('./views/public/public.module').then(module => module.PublicModule)},
  {path: 'manage', loadChildren: () => import('./views/manage/manage.module').then(module => module.ManageModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
