
import { PersonDetailsComponent } from './person-details/person-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPersonComponent } from './add-person/add-person.component';

const routes: Routes = [
  {path:"", redirectTo:"person-deatils", pathMatch:"full"},
  {path:"person-deatils", component: PersonDetailsComponent},
  {path:"add-contact",component:AddPersonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent=[PersonDetailsComponent, AddPersonComponent]
