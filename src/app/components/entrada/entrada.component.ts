import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ){}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, this.formatoEmail()]],
      senha: ['', [Validators.required, this.letramauiscula()]]
    });
  }

  login() {
    console.log('Login realizado com sucesso', this.loginForm.value);
    this.router.navigate(['/index']);
  }

  letramauiscula(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const hasUppercase = /[A-Z]/.test(control.value);
      return hasUppercase ? null : { letramauiscula: true };
    };
  }

  formatoEmail(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(control.value);
            return emailValid ? null : { formatoEmail: true };
    };
  }

}
