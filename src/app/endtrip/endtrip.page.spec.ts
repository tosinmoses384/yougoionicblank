import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EndtripPage } from './endtrip.page';

describe('EndtripPage', () => {
  let component: EndtripPage;
  let fixture: ComponentFixture<EndtripPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndtripPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EndtripPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
