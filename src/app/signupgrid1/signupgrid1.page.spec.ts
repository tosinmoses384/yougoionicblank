import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Signupgrid1Page } from './signupgrid1.page';

describe('Signupgrid1Page', () => {
  let component: Signupgrid1Page;
  let fixture: ComponentFixture<Signupgrid1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Signupgrid1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Signupgrid1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
