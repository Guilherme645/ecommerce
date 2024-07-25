// src/app/payment/personal/personal.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  personalForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.personalForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required]
    });
  };
  value: string | undefined;


  ngOnInit(): void {}

  onSubmit() {
    if (this.personalForm.valid) {
      this.router.navigate(['/seat']);
    }
  }
}
