import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../../service/contact.service';

@Component({
  selector: 'app-contacts-create',
  templateUrl: './contacts-create.component.html',
  styleUrls: ['./contacts-create.component.css']
})
export class ContactsCreateComponent implements OnInit {

  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit(): void {
  }
  
  createContact(): void{
    this.contactService.showMessage("Contact salvo com sucesso");
  }

  cancel(): void{
    this.router.navigate(['contacts'])
  }
}
