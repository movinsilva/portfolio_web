import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelgoBackendComponent } from './travelgo-backend.component';

describe('TravelgoBackendComponent', () => {
  let component: TravelgoBackendComponent;
  let fixture: ComponentFixture<TravelgoBackendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelgoBackendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelgoBackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
