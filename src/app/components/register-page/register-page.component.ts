import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})

export class RegisterPageComponent implements OnInit {
  user = new User();
  nameFormControl = new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z_ ]+$/)]);
  surnameFormControl = new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z_ ]+$/)]);
  ageFormControl = new FormControl('', [Validators.required, Validators.pattern(/^[1-9][0-9]?$|^150$/)]);
  validationMessages = {
    'name': [
      { type: 'required', message: 'Name is required' },
      { type: 'pattern', message: 'Your name must contain only letters' }
    ],
    'surname': [
      { type: 'required', message: 'Surname is required' },
      { type: 'pattern', message: 'Your surname must contain only letters' }
    ],
    'age': [
      { type: 'required', message: 'Age is required' },
      { type: 'pattern', message: 'Your age must contain only numbers under 150' }
    ]
  };

  registerForm: FormGroup = new FormGroup({
    name: this.nameFormControl,
    surname: this.surnameFormControl,
    age: this.ageFormControl
  });

  constructor(private userDataService: UserDataService, private router: Router) { }

  ngOnInit() {
    this.userDataService.currentUser.subscribe(user => this.user = user);
  }

  isValid(field: string, validation: any): boolean {
    return this.registerForm.get(field).hasError(validation.type)
            && (this.registerForm.get(field).dirty || this.registerForm.get(field).touched);
  }

  register() {
    this.userDataService.changeUser(this.user);
    this.router.navigate(['/access']);
  }
}
