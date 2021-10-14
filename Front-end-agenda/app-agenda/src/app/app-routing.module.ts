import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './src/components/home/home.component';
import { ContatoCrudComponent } from './src/components/contato-crud/contato-crud.component';
import { ContactsCreateComponent } from './src/components/contacts-create/contacts-create.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "contacts",
    component: ContatoCrudComponent
  },
  {
    path: "contacts/create",
    component: ContactsCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
