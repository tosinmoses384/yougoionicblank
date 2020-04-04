import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup2',
  templateUrl: './signup2.page.html',
  styleUrls: ['./signup2.page.scss'],
})
export class Signup2Page implements OnInit {
  

  constructor() { }

  ngOnInit() {
  }

  onCreateRegister() {
    console.log('Registering in progress...');
  }

}
