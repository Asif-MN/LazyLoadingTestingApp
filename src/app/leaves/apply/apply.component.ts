import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})

export class ApplyComponent implements OnInit {
  applyForm: FormGroup;
  loading = false;
  submitted = false;
  leaveTypes: any = ["Casual", "Earned", "Sick"]

  constructor(private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.applyForm = this.formBuilder.group({
      leaveType: ['', [Validators.required, dtrequired]],
      leaveDuration: ['', [Validators.required, isnumber, Validators.min(1), Validators.max(10)]],
      reason: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.applyForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.applyForm.invalid) {
      return;
    }

    this.loading = true;
  }
}

function isnumber(control: AbstractControl): { [key: string]: any } | null {
  if (isNaN(control.value)) {
    return { 'isnumber': true };
  } else {
    return null;
  }
}

function dtrequired(control: AbstractControl): { [key: string]: any } | null {
  if (control.value == "Choose Leave Type") {
    return { 'dtrequired': true };
  } else {
    return null;
  }
}


