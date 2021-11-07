
import { PersonDetailsComponent } from './person-details/person-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPersonComponent } from './add-person/add-person.component';

const routes: Routes = [
  {path:"", component:PersonDetailsComponent},
  {path:"person-deatils", component: PersonDetailsComponent},
  {path:"add-contact",component:AddPersonComponent},
  {path:"**", component:PersonDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent=[PersonDetailsComponent, AddPersonComponent]
