import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signupgrid1',
  templateUrl: './signupgrid1.page.html',
  styleUrls: ['./signupgrid1.page.scss'],
})
export class Signupgrid1Page implements OnInit {
  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      driverlicense: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.min(1)]
      }),
      email: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      address: new FormControl(null, {
        validators: [Validators.required, Validators.maxLength(20)]
      }),
      driverphone: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(15)]
      }),
      carownerphone: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(15)]
      })
    });
  }

  onNextsignup() {
    if (!this.form.valid) {
      return;
    }
    console.log(this.form);
  }

}
