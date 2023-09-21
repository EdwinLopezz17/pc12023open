import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeVenuesComponent } from './see-venues.component';

describe('SeeVenuesComponent', () => {
  let component: SeeVenuesComponent;
  let fixture: ComponentFixture<SeeVenuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeVenuesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeVenuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
