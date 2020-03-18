import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TokeninputConfirmPage } from './tokeninput-confirm.page';

describe('TokeninputConfirmPage', () => {
  let component: TokeninputConfirmPage;
  let fixture: ComponentFixture<TokeninputConfirmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokeninputConfirmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TokeninputConfirmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
