import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InputpasswordmodalPage } from './inputpasswordmodal.page';

describe('InputpasswordmodalPage', () => {
  let component: InputpasswordmodalPage;
  let fixture: ComponentFixture<InputpasswordmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputpasswordmodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InputpasswordmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
