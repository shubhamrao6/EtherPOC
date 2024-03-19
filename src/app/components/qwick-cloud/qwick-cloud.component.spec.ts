import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QwickCloudComponent } from './qwick-cloud.component';

describe('QwickCloudComponent', () => {
  let component: QwickCloudComponent;
  let fixture: ComponentFixture<QwickCloudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QwickCloudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QwickCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
