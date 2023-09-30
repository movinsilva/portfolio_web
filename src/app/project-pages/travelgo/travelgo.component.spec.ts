import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelgoComponent } from './travelgo.component';

describe('TravelgoComponent', () => {
  let component: TravelgoComponent;
  let fixture: ComponentFixture<TravelgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelgoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
