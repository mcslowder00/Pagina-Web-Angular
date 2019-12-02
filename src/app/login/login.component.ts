import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  createFormGroup(){
    return new FormGroup({

      user : new FormControl('',[Validators.required]),
      password : new FormControl('', [Validators. required])


    })
  }

  LoginForm: FormGroup;



  constructor() {
  
    this.LoginForm = this.createFormGroup();

   }

  ngOnInit() {

  }


  oneResetForm(){

    this.LoginForm.reset();

  }

  onSaveForm() {
    if (this.LoginForm.valid) {
      console.log(this.LoginForm.value);
    }

    else{
      this.oneResetForm();
      console.log('not valid');
    }
  }

  get user(){
    return this.LoginForm.get('user');
  }

  get password(){
    return this.LoginForm.get('password');
  }
}
