import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InputpasswordmodalRetryPage } from './inputpasswordmodal-retry.page';

describe('InputpasswordmodalRetryPage', () => {
  let component: InputpasswordmodalRetryPage;
  let fixture: ComponentFixture<InputpasswordmodalRetryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputpasswordmodalRetryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InputpasswordmodalRetryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
