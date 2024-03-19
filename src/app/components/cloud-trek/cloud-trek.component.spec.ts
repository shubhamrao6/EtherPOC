import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudTrekComponent } from './cloud-trek.component';

describe('CloudTrekComponent', () => {
  let component: CloudTrekComponent;
  let fixture: ComponentFixture<CloudTrekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloudTrekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudTrekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
