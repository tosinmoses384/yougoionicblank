import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeleteNotificationPage } from './delete-notification.page';

describe('DeleteNotificationPage', () => {
  let component: DeleteNotificationPage;
  let fixture: ComponentFixture<DeleteNotificationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteNotificationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteNotificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
