import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyridesPage } from './myrides.page';

describe('MyridesPage', () => {
  let component: MyridesPage;
  let fixture: ComponentFixture<MyridesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyridesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyridesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
