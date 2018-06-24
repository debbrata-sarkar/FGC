import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingZoneComponent } from './billing-zone.component';

describe('BillingZoneComponent', () => {
  let component: BillingZoneComponent;
  let fixture: ComponentFixture<BillingZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
