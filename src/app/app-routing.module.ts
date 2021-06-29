import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultUserProfileComponent } from './default-user-profile/default-user-profile.component';
const routes: Routes = [
  { path: '',   component: DefaultUserProfileComponent},
  { path:'index.html', component: DefaultUserProfileComponent }, // redirect to `first-component`
  { path: '',   component: DefaultUserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
