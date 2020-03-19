import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TokensuccessModalPage } from './tokensuccess-modal.page';

describe('TokensuccessModalPage', () => {
  let component: TokensuccessModalPage;
  let fixture: ComponentFixture<TokensuccessModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokensuccessModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TokensuccessModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
