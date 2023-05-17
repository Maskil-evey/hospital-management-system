import { Component } from '@angular/core';
import { UserModel } from '../../models/userSignupModel';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  user = '';
  holder = 'Email';
  hoderInvalid = 'Please enter an email address';
  userModel = new UserModel();
}
