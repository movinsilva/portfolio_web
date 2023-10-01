import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelgoFrontendComponent } from './travelgo-frontend.component';

describe('TravelgoFrontendComponent', () => {
  let component: TravelgoFrontendComponent;
  let fixture: ComponentFixture<TravelgoFrontendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelgoFrontendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelgoFrontendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
