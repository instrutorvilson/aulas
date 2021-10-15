import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../../service/contact.service';
import { Contact } from '../Contact_model';

@Component({
  selector: 'app-contacts-create',
  templateUrl: './contacts-create.component.html',
  styleUrls: ['./contacts-create.component.css']
})
export class ContactsCreateComponent implements OnInit {
   
  contact: Contact = {
      nome: '',
      fone: '',
      email: ''
   }

  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit(): void {
  }
  
  createContact(): void{
    this.contactService.create(this.contact).subscribe( () => {
      this.contactService.showMessage("Contact salvo com sucesso");
      this.router.navigate(['contacts']);
    });
      
  }

  cancel(): void{
    this.router.navigate(['contacts']);
  }
}
