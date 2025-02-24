import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, Validators } from "@angular/forms";
import { CONTACTS_DEPS } from "./contacts.dependencies";
import { ContactsForm } from "./interfaces/contacts-form.interface";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.scss"],
  standalone: true,
  imports: [CONTACTS_DEPS]
})
export class ContactsComponent implements OnInit {
  public form!: FormGroup<ContactsForm>;
  private submitAttempt = false;

  ngOnInit(): void {
    
  }

}
