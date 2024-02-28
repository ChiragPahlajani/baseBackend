import { Component, Input,Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Validation } from './validation';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { LoginService } from '../../../services/login.service';
import {ErrorhandlerService } from './errorhandler.service';
import { response } from 'express';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @Output() switchToSignupClicked = new EventEmitter<void>();
  constructor(
    private router: Router,
    private loginService:LoginService,
    private formBuilder: FormBuilder,
    private errorhandler:ErrorhandlerService
  ) {
  
  }
  @Output() launchLogin = new EventEmitter<void>();

  loginform!: FormGroup;
  validation:Validation=new Validation();
  
  
  
  @Input() showModal: boolean = false;
  switchToSignup() {
    
    this.switchToSignupClicked.emit();
  }










  ngOnInit(): void {
    this.loginform = this.formBuilder.group({
     
      email: ['', [Validators.required, this.validation.emailValidator]],
     
      password: ['', [Validators.required, Validators.minLength(8),this.passwordValidator]],
     
    });
   
  }

  
  passwordValidator(control: FormControl) {
    // Password should contain at least 1 uppercase letter and 1 special character
    
    const passwordRegex :RegExp= /^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (passwordRegex.test(control.value) || control.value == '') {
      
      return null // Valid password
    } 
        
   return { 
        invalidPassword: true 
      }; // Invalid password
    
  }
  
  LaunchEvent() {
    this.launchLogin.emit();
  }
 
  get f() {
    return this.loginform.controls;
  }
  onSubmit(){
   console.log(
    this.loginService.login(this.f['email'].value,this.f['password'].value).subscribe(response=>{
      console.log(response);
  
    },
    error=>{
      this.errorhandler.setError("Invalid username or password")
    }))

  }


}
  

