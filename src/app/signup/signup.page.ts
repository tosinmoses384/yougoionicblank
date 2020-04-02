import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { LoginmodalComponent } from '../signup2/loginmodal/loginmodal.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  onsignupmodal() {
    this.modalCtrl.create({component: LoginmodalComponent}).then(modalEl => {
      modalEl.present();
    });
  }

}
