import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiFiComponent } from './api-fi.component';

describe('ApiFiComponent', () => {
  let component: ApiFiComponent;
  let fixture: ComponentFixture<ApiFiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiFiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiFiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
