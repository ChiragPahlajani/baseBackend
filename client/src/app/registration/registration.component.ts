import { Component,Input,Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Validation } from './validation';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: '../login/login.component.css'
})
export class RegistrationComponent{ 
  registrationform!: FormGroup;
  validation:Validation=new Validation();
  @Input() showModal: boolean = false;
  @Output() switchToLoginClicked = new EventEmitter<void>();
  constructor(
    private formBuilder: FormBuilder,
) {}
  switchToLogin() {
    this.switchToLoginClicked.emit();
  }
  get f() {
    return this.registrationform.controls;
  }
  
 
  ngOnInit(): void {
    this.registrationform = this.formBuilder.group({
      name:['',[Validators.required,Validators.minLength(5),this.validation.nameValidator]],
     
      email: ['', [Validators.required, this.validation.emailValidator]],
     
      password: ['', [Validators.required, Validators.minLength(8),this.validation.passwordValidator]],

     
    });
  }
  onSubmit() {
    if(this.registrationform.invalid){
      return;
    }
      
      console.log(this.registrationform.value); // Submit the form data
    
  }
}
