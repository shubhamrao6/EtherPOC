import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwaggerPopupComponent } from './swagger-popup.component';

describe('SwaggerPopupComponent', () => {
  let component: SwaggerPopupComponent;
  let fixture: ComponentFixture<SwaggerPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwaggerPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwaggerPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
