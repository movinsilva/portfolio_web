import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelgoAdminComponent } from './travelgo-admin.component';

describe('TravelgoAdminComponent', () => {
  let component: TravelgoAdminComponent;
  let fixture: ComponentFixture<TravelgoAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelgoAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelgoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
