// src/app/payment/seat/seat.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css']
})
export class SeatComponent implements OnInit {
  seatForm: FormGroup;
  formGroup!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    
    this.seatForm = this.fb.group({
      seatNumber: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.formGroup = new FormGroup({
        value: new FormControl(1234)
    });
}

  onSubmit() {
    if (this.seatForm.valid) {
      this.router.navigate(['/payment']);
    }
  }
}
