import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashApiComponent } from './cash-api.component';

describe('CashApiComponent', () => {
  let component: CashApiComponent;
  let fixture: ComponentFixture<CashApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
