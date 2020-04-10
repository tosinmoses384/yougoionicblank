import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signupgrid1',
  templateUrl: './signupgrid1.page.html',
  styleUrls: ['./signupgrid1.page.scss'],
})
export class Signupgrid1Page implements OnInit {
  form: FormGroup;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      driverlicence: new FormControl(null, {
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
      }),
      cartype: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      carbrand: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      carmodel: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      caryear: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      carplatenumber: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(15)]
      }),
      carcolor: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      password: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    });
  }


  // %%%%%%%%%%%%%%%%%%%%%%%
  // THIS IS YET TO COMPLETE
  // %%%%%%%%%%%%%%%%%%%%%%%
  // signup(
  //       name: string, 
  //       driverlicence: string,
  //       email: string,
  //       address: string,
  //       driverphone: string,
  //       carownerphone: string,
  //       cartype: string,
  //       carbrand: string,
  //       carmodel: string,
  //       caryear: string,
  //       carplatenumber: string,
  //       carcolor: string,
  //       password: string
  //   ) {
  //     return this.http.post("54.179.188.118:5000/driver/register", {
  //       fullname: name,
  //       driverlicence: driverlicence,
  //       email: email,
  //       address: address,
  //       phone: driverphone,
  //       carownerphone: carownerphone,
  //       carType: cartype,
  //       carBrand: carbrand,
  //       carModel: carmodel,
  //       carYear: caryear,
  //       carPlateNumber: carplatenumber,
  //       carColor: carcolor,
  //       password: password

  //   })
  // }

  onNextsignup() {
    if (!this.form.valid) {
      return;
    }
    console.log(this.form);
  }

}
